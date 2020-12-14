import React from 'react'
import {Link} from 'react-router-dom'


function Card(props){

    const path = window.location.pathname
    let content = null

    if(path === '/admin'){
        content = (
            <Link to={`${props.info._id}`}>   
                <button type="button" className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 mt-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline">
                    Edit
                </button>
            </Link>
        )
    }

    return (
                <div className="border border-gray-300 p-6 rounded-lg ">
                    
                    <img src = {props.info.image} alt={props.info.title}/>
                    <h2 className="border text-lg  font-medium title-font mb-2 bg-white text-gray-700">{props.info.title}</h2>
                    <p className="leading-relaxed text-base">{props.info.description}</p>

                    <div className="google-map-code mt-3">
                        <iframe title={props.info.title} src= {props.info.map} aria-hidden="false" ></iframe>
                    </div>
                    {content}

                    
                </div>
    )
}

export default Card
