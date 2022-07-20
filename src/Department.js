import React, { Fragment } from 'react'
import JobsInDepartment from './JobsInDepartment';
import "./Department.css";
import Heading from './Heading';

const Department = ({ item, viewJob }) => {

    return (
        <div className='department'>
            {/* <h4 >{item.title}</h4> */}
            <Heading title={item.title} fontSize={30} />
            <div >
                {item.jobs.map((job, key) => (
                    <React.Fragment key={key}>
                        <JobsInDepartment job={job} viewJob={(val) => { viewJob(val) }} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Department
