import React, { useEffect, useState } from 'react'

//css
import "./catagoryStatusTable.css"
import Button from '../button/Button'
import { getAssessmentSummary } from '../../services/api/answerApi'

const catagories = [
    "Communication", "Intimacy", "Values", "Economy", "Child rearing", "Trust", "Boundaries", "Everyday life"
]

const statusTable = [{
    catagory: "Communication",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 7,
}, {
    catagory: "Intimacy",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 4,
}, {
    catagory: "Values",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 5,
}, {
    catagory: "Economy",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Child rearing",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 2,
}, {
    catagory: "Trust",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 4,
}, {
    catagory: "Boundaries",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 1,
}, {
    catagory: "Everyday life",
    status: "UNLOCK CATEGORY",
    rating: 6,
    subCatagories: 3,
}]

const CatagoryStatusTable = () => {
    const [yourSummaryValues, setYourSummaryValues] = useState(false)
    const [data, setData] = useState(null); // State for storing API data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const [assessmentId, setAssessmentId] = useState(sessionStorage.getItem('current_assesment_id'));

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading            
                const response = await getAssessmentSummary(assessmentId);
                if (!response) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setData(response.data); // Store data

            } catch (err) {
                setError(err.message); // Store error message
            } finally {
                setLoading(false); // Stop loading
            }
        };
        if (assessmentId != null) {
            fetchData(); // Call the function on mount
        }
    }, []); // Empty dependency array ensures it only runs once on mount


    return (
        /*  <div className="table-container">  */

        <div className="table-container">

            {/* Divider */}
            {/* <div className="divider-horizantal"style={{margin:"10px auto 0"}}></div> */}
            <ul className='table-header'>
                <li>Catagories</li>
                <li>Status</li>
                <li>Rating</li>
                <li>Sub Catagories</li>
                <li style={{ visibility: "hidden" }}>button</li>
            </ul>
            {/* Divider */}
            <div className="divider-horizantal" style={{ marginBottom: "22px", marginTop: 0 }}></div>
            {
                data?.summary?.map((each, i) => {
                    return <section key={i}>
                        <ul className='table'>
                            <li>{each.categoryName}</li>
                            <li>{"UNLOCK CATEGORY"}</li>{/* link */}
                            <li><section className={`circle-background  ${false ? "catogory_active" : "catogory_inactive"}`}><span>{each.answer?.score ? each.answer?.score : "-"}</span></section></li>{/* Number */}
                            <li>{8} of {8}</li>{/* count 0 of 6 */}
                            <li><Button className='manage-button'>Manage</Button></li>
                        </ul>

                        {/* Divider */}
                        <div className="divider-horizantal" style={{ margin: "22px auto", backgroundColor: "#C68977" }}></div>
                    </section>
                })
            }

            {
                !data && statusTable.map((each, i) => {
                    return <section key={i}>
                        <ul className='table'>
                            <li>{each.catagory}</li>
                            <li>{"UNLOCK CATEGORY"}</li>{/* link */}
                            <li><section className={`circle-background  ${false ? "catogory_active" : "catogory_inactive"}`}><span>{each.answer?.score ? each.answer?.score : "-"}</span></section></li>{/* Number */}
                            <li>{4} of {8}</li>{/* count 0 of 6 */}
                            <li><Button className='manage-button'>Manage</Button></li>
                        </ul>

                        {/* Divider */}
                        <div className="divider-horizantal" style={{ margin: "22px auto", backgroundColor: "#C68977" }}></div>
                    </section>
                })
            }

        </div>
    )
}

export default CatagoryStatusTable