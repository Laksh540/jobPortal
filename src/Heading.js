import React from 'react';
import "./Heading.css";

const Heading = ({ title, fontSize }) => {
    return (
        <div className='heading'>
            <h4 style={{ fontSize: fontSize }} >{title}</h4>
        </div>
    )
}

export default Heading
