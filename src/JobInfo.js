import React from 'react';
import "./JobInfo.css";

const JobInfo = ({ imageUrl, title, alt, textSize }) => {
    return (
        <div className='JobInfo'>
            <img src={imageUrl} alt={alt} />
            <span style={{ fontSize: textSize }}>{title}</span>
        </div>
    )
}

export default JobInfo
