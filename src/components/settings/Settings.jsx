import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const Settings = () => {
  const [file, setFile] = useState(null);
  const [groupedData, setGroupedData] = useState([]);

  const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm",
  ].map((x) => `.${x}`).join(",");

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleFile = () => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array", bookVBA: true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const parsedData = XLSX.utils.sheet_to_json(ws);

      // Group data by category
      const grouped = parsedData.reduce((acc, current) => {
        let categoryGroup = acc.find((group) => group.category === current.Category);
        if (!categoryGroup) {
          categoryGroup = {
            category: current.Category,
            questions: current.Question,
            options: [],
          };
          acc.push(categoryGroup);
        }
        categoryGroup.options.push(current.Options);
        return acc;
      }, []);

      setGroupedData(grouped);
    };

    if (file) {
      if (rABS) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  };

  return (
    <div className="header">
      <div>
        <label htmlFor="file">Upload an Excel to Process Triggers</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept={SheetJSFT}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Process Triggers"
          onClick={handleFile}
        />
      </div>

      {/* Render Table */}
      {groupedData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <table border="1" style={{ width: "100%", textAlign: "left" }}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Question</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {groupedData.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td>{row.questions}</td>
                  <td>{row.options.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Settings;
