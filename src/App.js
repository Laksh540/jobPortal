
import { useState } from 'react';
import './App.css';
import Filters from './Filters';
import JobDetails from './JobDetails';
import Jobs from './Jobs';

function App() {
  const [filterValues, setFilterValues] = useState("");
  const [viewJobId, setViewJobId] = useState(null);
  const [otherJobs, setOtherJobs] = useState([]);
  const getFilters = (filterVal) => {
    //console.log("filterVal ", filterVal);
    setFilterValues(filterVal);
  }

  const jobIdHandler = (val) => {
    // console.log("app jobId", val);
    setViewJobId(val);
  };
  const viewAllJobsHandler = () => {
    setViewJobId(null);
  }
  const otherJobsHandler = (jobs) => {
    setOtherJobs(jobs);
  }
  return (
    <div className="App container">
      {!viewJobId &&
        <>
          <Filters filtersApiString={getFilters} />
          <Jobs filterString={filterValues} viewJob={jobIdHandler} OtherJobs={otherJobsHandler} />
        </>}
      {viewJobId && <>
        <JobDetails jobId={viewJobId} viewAllJobs={viewAllJobsHandler} otherJobs={otherJobs} />
      </>}
    </div>
  );
}

export default App;
