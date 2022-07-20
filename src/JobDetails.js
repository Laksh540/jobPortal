import React, { useEffect, useState } from 'react'
import JobContent from './JobContent';
import JobHeader from './JobHeader';
import SideBar from './SideBar';
import backBtn from "./images/back.png";
import "./JobDetails.css";

const JobDetails = ({ jobId, viewAllJobs, otherJobs }) => {
    const [isLoading, setIsLoading] = useState(null);
    const [jobHeader, setJobHeader] = useState(null);
    const [description, setDescription] = useState(null);
    //const []
    useEffect(() => {


        setIsLoading(true);
        fetch('https://teknorix.jobsoid.com/api/v1/jobs/' + jobId)
            .then(response => response.json())
            .then(resData => {
                // console.log("id", jobId);
                //console.log("jobs", resData);

                let header = {
                    slug: resData.slug,
                    title: resData.title,
                    type: resData.type,
                    department: resData.department,
                    company: resData.company,
                    location: resData.location,
                    applyUrl: resData.applyUrl
                };
                setJobHeader(header);
                //console.log("header", header);
                setDescription(resData.description);
                setIsLoading(false);

            }).catch((err) => {
                //console.log("err", err);
                setIsLoading(false);
            })

    }, [jobId])



    return (
        <div className='detailsForJob'>
            <div className='backbtn'>
                <img src={backBtn} alt="back button" onClick={() => { viewAllJobs() }} />
            </div>
            <div className='job_contents'>
                {jobHeader && <JobHeader
                    jobData={jobHeader}
                    showCompany={true}
                    titleFontSize={30}
                    showJobType={true}
                    textSize={14}
                    mb="mb-3"
                />}
                {jobHeader && <a className='btnApply' href={jobHeader.applyUrl}>Apply</a>}
                <hr className='line' />
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-8 pl-0">
                            <JobContent jobDescription={description} />
                        </div>
                        <div className="col-4 d-flex justify-content-center ">
                            {otherJobs.length > 0 && <SideBar otherJobs={otherJobs} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
