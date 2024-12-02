import React, { useState } from 'react';
import './footer.css'; // Make sure to create this CSS file for styling
import Text from '../text/Text';

import { useAuth } from '../../components/logout/AuthContext';
import * as XLSX from 'xlsx';



const Footer = () => {

    const { logout } = useAuth();
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [cols, setCols] = useState([]);

    const make_cols = refstr => {
        let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
        return o;
    };

    const SheetJSFT = [
        "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
    ].map(function(x) { return "." + x; }).join(",");

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
          const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const parsedData = XLSX.utils.sheet_to_json(ws);
          
          // Update data state
          setData(parsedData);
        
          // Dynamically calculate groupedData
          const groupedData = parsedData.reduce((acc, current) => {
            let categoryGroup = acc.find(group => group.category === current.Category);
            if (!categoryGroup) {
                categoryGroup = {
                    category: current.Category,
                    questions: current.Question,
                    options: []
                };
                acc.push(categoryGroup);
            }
            categoryGroup.options.push({ optionName: current.Options });
            return acc;
          }, []);
        
          console.log(JSON.stringify(groupedData, null, 2));
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
        <div className="footer">
            <Text
                type="a"
                className="logout-link"
                href="#"
                onClick={logout}
            >
                Log out
            </Text>
            <Text
                type="p"
                className="logged-in-text"
            >
                Logged in as <br /> Firstname Lastname
            </Text>
        </div>
    );
};

export default Footer;
