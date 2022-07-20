import React from 'react';
import "./JobType.css";

const JobType = ({ type, textSize }) => {
    return (
        <div className='job_type'>
            <span style={{ fontSize: textSize }}>{type}</span>
        </div>
    )
}

export default JobType
