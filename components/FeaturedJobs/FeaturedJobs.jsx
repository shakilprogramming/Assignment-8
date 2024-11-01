import { useEffect,useState } from "react";
import Job from "../Job/job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))  
    },[])
    return (
      <div>
          <div className="text-center mt-10">
            <h2 className="text-6xl mb-10">Books</h2>
        </div>
        <div className="grid grid-cols-3 gap-6 ">
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
      </div>
    );
};

export default FeaturedJobs;