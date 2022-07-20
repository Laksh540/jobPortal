import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import Department from './Department';


const Jobs = (props) => {
    const [isLoading, setIsLoading] = useState(null);
    const [grpByDeptData, setGrpByDeptData] = useState([]);
    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(true);
            fetch('https://teknorix.jobsoid.com/api/v1/jobs?' + props.filterString)
                .then(response => response.json())
                .then(resData => {
                    //console.log("jobs", resData);
                    const res = resData;
                    let groupByDepartment = [];
                    for (let i = 0; i < res.length; i++) {
                        const indexOfDept = groupByDepartment.findIndex(c => c.id === res[i].department.id);
                        if (indexOfDept === -1) {
                            let deptDetails = res[i].department;
                            deptDetails.jobs = [];
                            deptDetails.jobs.push({
                                location: res[i].location,
                                slug: res[i].slug,
                                title: res[i].title,
                                type: res[i].type,
                                applyUrl: res[i].applyUrl,
                                id: res[i].id
                            });
                            groupByDepartment.push(deptDetails)
                        }
                        else {
                            groupByDepartment[indexOfDept].jobs.push({
                                location: res[i].location,
                                slug: res[i].slug,
                                title: res[i].title,
                                type: res[i].type,
                                applyUrl: res[i].applyUrl,
                                id: res[i].id
                            })
                        }
                    }
                    setGrpByDeptData(groupByDepartment);
                    //console.log("all Department", groupByDepartment);

                    setIsLoading(false);

                }).catch((err) => {
                    //console.log("err", err);
                    setIsLoading(false);
                })
        }, 2000);


        return () => {
            clearTimeout(timer);
        }
    }, [props])
    const jobViewHandler = (val) => {
        //console.log("id", val)
    }

    const jobIdHandler = (val) => {
        let fewOtherJobs = [];
        let index = -1;

        for (let i = 0; i < grpByDeptData.length; i++) {
            const isDept = grpByDeptData[i].jobs.some(c => c.id === val);
            if (isDept) {
                index = i;
                break;
            }
        }
        for (let j = 0; j < grpByDeptData[index].jobs.length; j++) {
            if (fewOtherJobs.length === 4) {
                break;
            }
            if (grpByDeptData[index].jobs[j].id != val) {
                fewOtherJobs.push(grpByDeptData[index].jobs[j]);
            }
        }

        //console.log("fewOtherJobs", fewOtherJobs);
        props.OtherJobs(fewOtherJobs);
        props.viewJob(val);
    }
    return (
        <div className='jobs p-3 '>
            {isLoading && <h6 style={{ textAlign: "center" }}>Loading...</h6>}
            {!isLoading && <div className='jobs_list'>
                {grpByDeptData.map((item, key) => (
                    <React.Fragment key={key}>
                        <Department item={item} viewJob={jobIdHandler} />
                    </React.Fragment>
                ))}

            </div>}
        </div>
    )
}

export default Jobs
