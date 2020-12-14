import React from 'react'
import Delete from './Delete'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { useHistory } from "react-router-dom";


function EditCard(props){
    //Props contain json data [title,description,category,image,map]

    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            _id: props.info._id.$oid,
            category: props.info.category,
            title: props.info.title,
            description: props.info.description,
            image: props.info.image,
            map: props.info.map
        }
    })

    const history = useHistory()
    const url = 'http://54.79.199.46:8080/api/v1/update'
    const onSubmit = (data) => {
        if(window.confirm('Are you sure to delete this record?'))
        axios.post(url,data)
        .then(function(response){
            console.log(response)
            alert('Succefully Updated!')
            history.push('/admin')
        })
        .catch(function(error){
            console.log(error)
        })
    }

    return (
            <form  onSubmit={handleSubmit(onSubmit)} className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-700 text-lg font-bold text-center">Create Card</p>
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
                    <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" name="title" type="text"  ref={register({ required: true })} />
                    {errors.title && <span className='text-red-700'>This field is required</span>}
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" >Description</label>
                    <textarea className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" rows="4" cols="50" name='description' ref={register({ required: true })}></textarea>
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
                <div className="hidden">
                    <input name="_id" type="text" placeholder='https://' ref={register}/>
                </div>

                <div className="mt-2 flex">
                    <div className="flex-initial mr-5">
                        <button type="submit" className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2  transition duration-200 ease select-none hover:bg-yellow-500 focus:outline-none focus:shadow-outline">Update</button>
                    </div>
                    <div className="flex-initial">
                        <Delete id = {props.info._id.$oid} />
                    </div>
                </div>
                
                
            </form>

            
    )
}

export default EditCard
