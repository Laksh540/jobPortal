import React from 'react'

const JobContent = ({ jobDescription }) => {
    //console.log("description", jobDescription);
    return (
        <div className="" dangerouslySetInnerHTML={{ __html: jobDescription }}></div>
    )
}

export default JobContent
