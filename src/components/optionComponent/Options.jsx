import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Option from './Option';
import Button from '../button/Button';

import './option.css';

const Options = () => {

    const [isScoreSelected, setIsScoreSelected] = useState(false)
    const [optionActiveId, setOptionActiveId] = useState()

    const [info, setInfo] = useState()
    const options = [
        {
            id: 7,
            option: "Very good",
            selected: false,
            score: 7
        },
        {
            id: 6,
            option: "",
            selected: false,
            score: 6
        },
        {
            id: 5,
            option: "",
            selected: false,
            score: 5
        },
        {
            id: 4,
            option: "Okay",
            selected: false,
            score: 4
        },
        {
            id: 3,
            option: "",
            selected: false,
            score: 3
        },
        {
            id: 2,
            option: "",
            selected: false,
            score: 2
        },
        {
            id: 1,
            option: "Very bad",
            selected: false,
            score: 1
        }
    ]
    return (
        <div>
            <p style={{ color: "#C68977" }}>{info && 'Please select score'}</p>

            <div className='options-div' >
                {options.length &&
                    options.map((opt, i) => {
                        return <>
                            <section className={`Options-section ${optionActiveId === opt.id && 'option-active'}`} key={`option${i + 1}`}>
                                {console.log(optionActiveId)}
                                <Option optionVal={opt.score} text={opt.option} bgColor={"#41414E"} color={"#F9EEE1"} PWidth={"140px"} />
                                
                            </section>
                            { opt.score!=1 && <p style={{width:"150px",margin:"0 0 0 45px",textAlign:"start",lineHeight:"15px"}}>|</p>}
                        </>
                    })
                }

            </div>
        </div>
    )
}

export default Options