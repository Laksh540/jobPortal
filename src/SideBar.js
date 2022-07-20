import React from 'react'
import Heading from './Heading';
import JobHeader from './JobHeader';
import "./Sidebar.css";

const SideBar = ({ otherJobs }) => {
    //console.log("side bar jobs", otherJobs);
    return (
        <div className='sidebar p-3'>
            <Heading title={"OTHER JOB OPENINGS"} fontSize={20} />
            {otherJobs.map((item, key) => (
                <React.Fragment key={key}>
                    <JobHeader
                        jobData={item}
                        showCompany={false}
                        titleFontSize={18}
                        showJobType={false}
                        textSize={12}
                        mb="mb-3"
                        mbtitle="0"
                    />
                </React.Fragment>
            ))}

        </div>
    )
}

export default SideBar
