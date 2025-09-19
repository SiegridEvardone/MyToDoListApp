import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../api';

const AddTask = () => {
  const [inputs, setInputs] = useState({status: "pending"});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs((values) => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      await api.post('/taskadd', inputs);
      alert("Task added successfully");
      navigate('/tasks');
    }catch(err){
      console.log("Failed adding a task.", err);  
    }
  }
  return (
    <div className='min-h-screen p-5 flex flex-col gap-4'>
      <h1 className="font-semibold text-2xl">Add a task</h1>
      <div className='border border-gray-200 p-4 rounded shadow-xl'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
          <label className='font-medium ' htmlFor="title">Title:</label>
          <input required type="text" name='title' id='title' placeholder='Enter title...' className='border border-gray-100 p-2 min-w-full rounded' onChange={handleChange} />
          <label className='font-medium ' htmlFor="description">Description:</label>
          <input required type="text" name='description' id='description' placeholder='Enter description...' className='border border-gray-100 p-2 min-w-full rounded' onChange={handleChange} />
          <label className='font-medium ' htmlFor="status">Status: </label>
          <select className='border border-gray-200 rounded p-1' value={inputs.status} name='status' id='status' onChange={handleChange}>
            <option value="pending" defaultValue>Pending</option>
            <option value="completed">Completed</option>
          </select> <br/>
          <div>
            <NavLink to='/tasks' className="border py-1 px-4 rounded font-medium text-sm">Back</NavLink>
            <button type='submit' className='bg-black font-medium text-sm text-white py-1 px-4 rounded mt-4 ml-2'>Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default AddTask
