import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import api from '../api';

const EditTask = () => {
  const {id} = useParams();
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getTask = async () => {
      try{
        const res = await api.get(`/task/${id}`);
        setInputs(res.data);
        console.log("ID from params:", id);
        console.log("Response:", res.data);
      }catch(err){
        console.error("Failed to get data.",err);
      }
    }
    getTask();
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      await api.put(`/task/${id}`, inputs);
      alert("Updated succesfully.");
      navigate('/tasks');
    }catch(error){
      console.error("Error in updating the user:", error);
    }
};
  return (
    <div className='min-h-screen p-5 flex flex-col gap-4'>
          <h1 className="font-semibold text-2xl">Edit a task</h1>
          <div className='border border-gray-300 p-4 rounded'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
              <label className='font-medium' htmlFor="title">Title:</label>
              <input required type="text" name='title' id='title' placeholder='Enter title...' className='border border-gray-200 p-2 min-w-full rounded' onChange={handleChange} defaultValue={inputs.title} />
              <label className='font-medium' htmlFor="description">Description:</label>
              <input required type="text" name='description' id='description' placeholder='Enter description...' className='border border-gray-200 p-2 min-w-full rounded' onChange={handleChange} defaultValue={inputs.description}/>
              <label className='font-medium' htmlFor="status">Status: </label>
              <select className='border border-gray-200 rounded p-1' value={inputs.status} name='status' id='status' onChange={handleChange}>
                <option value="pending" defaultValue>Pending</option>
                <option value="completed">Completed</option>
              </select> <br/>
              <div>
                <NavLink to={`/task/view/${inputs.id}`} className="border py-1 px-4 rounded font-medium text-sm">Back</NavLink>
                <button type='submit' className='bg-black font-medium text-sm text-white py-1 px-4 rounded mt-4 ml-2'>Save</button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default EditTask
