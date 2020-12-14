import React from 'react'
import { useHistory } from "react-router-dom";


export const Delete = ({id})=>{
    const history = useHistory()
    const url = `http://54.79.199.46:8080/api/v1/delete/${id}`
    const deleteItem =()=>{
        if(window.confirm('Are you sure to delete this record?'))
        fetch(url,{
            method:'POST',
            body: JSON.stringify({
                id: id
            })
        }).then(response=>response.json())
          .then(data=>{
              console.log(data)
              history.push('/')
          })
    }
    return (
      
        <button onClick={deleteItem} className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2  transition duration-200 ease select-none hover:bg-red-800 focus:outline-none focus:shadow-outline">Delete</button>
        
    )
}

export default Delete