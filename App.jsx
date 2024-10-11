import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Searchbar from './component/Searchbar';
import JobCard from './component/JobCard'; // Corrected import statement
import jobData from "./JobDummyData"
//import {useState} from "react"
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"



function App() {
  const[jobs,setJobs] = useState([]);


  const fetchJobs = async() =>{
    const tempJobs=[]
    const jobsRef = query(collection(db, "jobs"))
    const q = query(jobsRef, orderBy("postedOn","desc"));
    const req = await getDocs(q);

req.forEach((job) => {
  
  //console.log(doc.id, " => ", doc.data());
  tempJobs.push({
  ...job.data(),
  id: job.id,
  postedOn:job.data().postedOn.toDate()
  })
});
setJobs(tempJobs);

  }
  
  useEffect(() => {
    fetchJobs()
  },[])

  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar />
      {jobs.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  );
}

export default App;
