import React, { useEffect, useState } from 'react'
import EditCard from '../Components/EditCard'
import Back from '../Components/Back'
import {
    useParams,
    Link
  } from "react-router-dom";

function Edit(){
    const {id} = useParams()
    const url = `http://54.79.199.46:8080/api/v1/id/${id}`
    const [data, setData] = useState([]);

    useEffect(()=>
    fetch(url)
    .then(response => response.json())
    .then(data=>setData(data)
    ),[] )

    let content = null

    console.log(data.result)
    if(data.result){
        content = (
            <div>
                <EditCard info = {data.result}/>
            </div>

        )
    }

    return(
        <div>
            <div className="text-gray-200 bg-gray-900 min-h-screen flex justify-center">
                <div>
                    <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl text-center">Edit Page</h1>
                    {content}
                    <Back />
                </div>
            </div>
        </div>
        
       
    )
}

export default Edit