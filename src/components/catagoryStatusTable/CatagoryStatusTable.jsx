import React, { useState } from 'react'

//css
import "./catagoryStatusTable.css"
import Button from '../button/Button'

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
const [yourSummaryValues,setYourSummaryValues] = useState(false)

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
            <div className="divider-horizantal" style={{marginBottom:"22px",marginTop:0}}></div>
            {
                statusTable.map((each,i) => {
                    return <section key={i}> 
                        <ul className='table'>
                            <li>{each.catagory}</li>
                            <li>{each.status}</li>{/* link */}
                            <li><section className={`circle-background  ${false?"active":"inactive"}`}><span>{yourSummaryValues?each.rating:"-"}</span></section></li>{/* Number */}
                            <li>{each.subCatagories} of {8}</li>{/* count 0 of 6 */}
                            <li><Button className='manage-button'>Manage</Button></li>
                        </ul>

                        {/* Divider */}
                        <div className="divider-horizantal" style={{margin:"22px auto",backgroundColor:"#C68977"}}></div>
                    </section>
                })
            }



        </div>
    )
}

export default CatagoryStatusTable