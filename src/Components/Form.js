import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'


function Form(){
    const url = 'http://54.79.199.46:8080/api/v1/create'
    const {register, handleSubmit,errors} = useForm()
    
    
    const onSubmit = (data) => {
        axios.post(url,data)
        .then(function(response){
            console.log(response)
            alert('Succefully Created!')
            window.location.reload();
            
        })
        .catch(function(error){
            console.log(error)
        })
    }



    return (

            <form  onSubmit={handleSubmit(onSubmit)} className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">

                <p className="text-gray-700 text-lg font-bold">Create Card</p>

                <div className="mt-5">
                    <label className="block text-sm text-gray-800" >Category</label>
                    
                    <select name="category" className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" ref={register}>
                        <option value='cafe'>Cafe</option>
                        <option value='restaurant'>Restaurant</option>
                        <option value='activity'>Activity</option>
                    </select>
                </div>
                
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >Title</label>
                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" name="title" type="text" ref={register({ required: true })} />
                    {errors.title && <span className='text-red-700'>This field is required</span>}
                </div>

                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >Description</label>
                    <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name='description' ref={register({ required: true })}></textarea>
                    {errors.description && <span className='text-red-700'>This field is required</span>}
                </div>

                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >ImageURL</label>
                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"  name="image" type="text" placeholder='https://' ref={register}/>
                </div>

                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >GoogleMap URL</label>
                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"  name="map" type="text" placeholder='https://' ref={register}/>
                </div>
                <div className="mt-4 text-center">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                </div>
                

            </form>

    )
}

export default Form