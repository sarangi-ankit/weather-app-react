// api.openweathermap.org/data/2.5/weather?q={city name}&appid={b4b478c7779eb49f650f36de4665b751}

import React, { useEffect, useState } from 'react'


function Temp() {
    const [city,setCity]=useState("")
    const [search,setSearch]=useState('')

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b4b478c7779eb49f650f36de4665b751`
            const response=await fetch(url)
            
            const res=await response.json()
            console.log(res)
            setCity(res.main)
            console.log(city)
        }
        fetchApi()
    },[search])
    return (
        <>
        <div className="container">
            <div className="heading">
                <input onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="enter youe city" value={search}/>
            </div>
            {!city?
            (<p>no data found</p>):
            (
            <div>
                <div className="city">
                <h1>{search}</h1>
            </div>
            <div className="tempreture">
                <h1><span>{city.temp}&deg;</span> C</h1>
            <div className="min-max">
                <p>{city.temp_min}&deg;c/{city.temp_max}&deg;c</p>
            </div>
                
            </div>
            </div> 
            )    
        }
            
        </div>
        </>
    )
}

export default Temp
