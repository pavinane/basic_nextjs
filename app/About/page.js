'use client'

import React, { useEffect, useState } from 'react'
import Loading from '../loading';
import Users from '../component/Users';
import UserProfile from '../component/UserProfile';

const About = () => {

  const  [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async() => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setData(data);
      setLoading(false)
    }
    fetchUser();
  },[]);



  if(loading){
    return <Loading />
  }

  
  return (
    <div>
      <UserProfile searchResult={(result => setData(result))} />
      <Users users={data} />
    </div>
  )
}

export default About