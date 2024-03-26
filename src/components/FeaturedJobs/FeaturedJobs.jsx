import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs , setJobs] = useState([]);

    // this is not the best way to load show all data 
    const[dataLength , setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])
    return (
        <div className="my-9">
            {/* --------- */}
           <div className="text-center mb-7">
           <h2 className="text-2xl lg:text-5xl font-semibold">Featured Jobs : {jobs.length}</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>

           {/* --------- */}
           <div className="grid gap-10 lg:grid-cols-2">
                {
                  jobs.slice(0 , dataLength).map(job => <Job key={job.id} job={job}></Job>)  
                }
           </div>
           <div className={dataLength === jobs.length && 'hidden'}>
            <div className="mt-7 lg:ml-[710px]">
            <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white justify-center items-center"> See All Jobs</button>
            </div>
           </div>
        </div>
        
    );
};

export default FeaturedJobs;