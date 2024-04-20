import React, { useEffect, useState } from "react";
import JobListingItem from "./JobListingItem";

function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        setIsLoading(true);
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error while fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "recent jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2>Loading....</h2>
          ) : (
            <>
              {jobs.map((job) => (
                <JobListingItem key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
