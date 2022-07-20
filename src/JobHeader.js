import React from 'react'
import JobInfo from './JobInfo';
import field from "./images/field.png";
import location from "./images/location.png";
import JobType from './JobType';

const JobHeader = ({ jobData, showCompany, titleFontSize, showJobType, textSize, mb, mbtitle }) => {
    return (
        <div className={mb ? mb : "mb-0"}>
            {showCompany && <h6 className='company'>
                {`${jobData.department.title} department at ${jobData.company} `}
            </h6>}
            <h4 className='title' style={{
                fontWeight: 600,
                fontSize: titleFontSize,
                marginBottom: mbtitle ? mbtitle : "5px"
            }}>{jobData.title}
            </h4>
            <div className='d-flex align-items-center'>
                <JobInfo imageUrl={field} title={jobData.slug}
                    alt={jobData.slug}
                    textSize={textSize} />

                <JobInfo imageUrl={location}
                    title={jobData.location.title}
                    alt={jobData.location.title}
                    textSize={textSize} />
                {showJobType &&
                    <JobType type={jobData.type}
                        textSize={textSize} />}
            </div>
        </div>
    )
}

export default JobHeader
