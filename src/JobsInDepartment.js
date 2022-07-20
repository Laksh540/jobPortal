import React from 'react'
import JobInfo from './JobInfo';
import field from "./images/field.png";
import location from "./images/location.png";
import "./JobInDepartment.css";
import JobType from './JobType';
import JobHeader from './JobHeader';

const JobsInDepartment = ({ job, viewJob }) => {

    const jobViewHandle = (val) => {
        //console.log("selected id", val);
        viewJob(val);
    };
    return (
        <>
            <div className='job_info' >
                <div className="left_section">
                    {/* <div className='job_heading'>
                        <h6>{job.title}</h6>
                    </div>
                    <div className='job_details'>
                        <JobInfo imageUrl={field} title={job.slug} alt={job.slug} />
                        <JobInfo imageUrl={location} title={job.location.title} alt={job.location.title} />
                        <JobType type={job.type} />
                    </div> */}
                    <JobHeader jobData={job}
                        showCompany={false}
                        titleFontSize={20}
                        showJobType={true}
                        textSize={14} />
                </div>
                <div className="right_section">
                    <a className='job_apply' href={job.applyUrl}>Apply</a>
                    <button className='job_view' onClick={() => jobViewHandle(job.id)}>View</button>
                </div>
            </div>
        </>
    )
}

export default JobsInDepartment
