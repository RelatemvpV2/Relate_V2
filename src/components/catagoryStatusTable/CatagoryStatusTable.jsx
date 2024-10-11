import React from 'react'

//css
import "./catagoryStatusTable.css"
import Button from '../button/Button'

const catagories = [
    "Communication", "Intimacy", "Values", "Economy", "Child rearing", "Trust", "Boundaries", "Everyday life"
]

const statusTable = [{
    catagory: "Communication",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Intimacy",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Values",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Economy",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Child rearing",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Trust",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Boundaries",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}, {
    catagory: "Everyday life",
    status: "Invite Relation",
    rating: 6,
    subCatagories: 6,
}]

const CatagoryStatusTable = () => {
    return (
        <div className="table-container">

             {/* Divider */}
             <div className="divider-horizantal"style={{margin:"10px auto 0"}}></div>
            <ul className='table-header'>
                <li>Catagories</li>
                <li>Status</li>
                <li>Rating</li>
                <li>Sub Catagories</li>
                <li style={{ visibility: "hidden" }}>button</li>
            </ul>
            {/* Divider */}
            <div className="divider-horizantal" style={{marginBottom:"10px",marginTop:0}}></div>
            {
                statusTable.map((each,i) => {
                    return <section key={i}>
                        <ul className='table'>
                            <li>{each.catagory}</li>
                            <li>{each.status}</li>{/* link */}
                            <li><section className='circle-background'>{each.rating}</section></li>{/* Number */}
                            <li>{each.subCatagories}</li>{/* count 0 of 6 */}
                            <li><Button className='manage-button'>Manage</Button></li>
                        </ul>

                        {/* Divider */}
                        <div className="divider-horizantal" style={{margin:"10px auto"}}></div>
                    </section>
                })
            }



        </div>
    )
}

export default CatagoryStatusTable