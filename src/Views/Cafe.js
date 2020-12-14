import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'

function Cafe(){
    const url = 'http://54.79.199.46:8080/api/v1/cafe'
    const [cafes,setCafes] = useState({},[url])
    
    useEffect(()=>{
        axios.get(url)
            .then(response =>{
                setCafes(response.data)
            })
    }, [url])

    let content = null

    if(cafes.result){
        content =  
            cafes.result.map((cafe,key)=>
                <div className="xl:w-1/3 md:w-1/2 p-4" key = {key}>
                    <Card 
                        info = {cafe}
                    />
                </div>
            )
        
    }

    return(
        <div>
            <section className=" text-gray-200 bg-gray-900">
            <div className="max-w-6xl mx-auto px-5 py-24 ">
                <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center">
                <h1 className=" title-font mb-5 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"> Favorite Cafe</h1>
                </div>
                <div className="flex flex-wrap -m-4">

                {content}

                </div>
            </div>
            </section>
        </div>
    )
}

export default Cafe