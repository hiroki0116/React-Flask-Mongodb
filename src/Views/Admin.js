import React from 'react'
import Form from '../Components/Form'
import Back from '../Components/Back'
import Cafe from './Cafe'
import Activity from './Activity'
import Restaurant from './Restaurant'

function Admin(){
    
    return(
        <div>
            <div className=" text-gray-200 bg-gray-900 min-h-screen flex justify-center	">
                    <div className="max-w-lg max-w-xs container py-5 max-w-md mx-auto">
                        <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl text-center">Admin Page</h1>
                        <div className="">
                        <Form  />
                        <Back />
                        </div>
         
                        
                    </div>
            </div>
            <Cafe />
            <Restaurant />
            <Activity />
        </div>
    )
}

export default Admin