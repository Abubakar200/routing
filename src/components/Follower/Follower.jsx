import React, { useEffect, useState } from 'react'

function Follower() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/AbuBakar200')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    },[])

  return (
    <div className='text-center text-4xl bg-slate-700 text-white p-4 '>Follower : {data.followers}
   <div className='flex items-center justify-center'>
    <img src={data.avatar_url} alt="" width={250} />
    </div>
    <h1>{data.name}</h1>
    
    </div>
  )
}

export default Follower