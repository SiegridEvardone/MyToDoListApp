import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import api from '../api';

const ViewTask = () => {
  const {id} = useParams();
  const [task, setTask] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getTask = async () => {
      try{
        const res = await api.get(`/task/${id}`);
        setTask(res.data);
        console.log("ID from params:", id);
        console.log("Response:", res.data);
      }catch(err){
        console.error("Failed to get data.",err);
      }
    }
    getTask();
  }, [id])

 const deleteTask = async () => {
  try{
    await api.delete(`/task/${id}`);
    alert("Task deleted successfully");
    if(task.status === 'pending'){
      navigate('/tasks');
    }else {
      navigate('/donetasks');
    }
    
  }catch(err){
    console.error("Failed deleting task.", err);
  }
 }
  return (
    <div className='min-h-screen flex flex-col gap-4 px-5 mt-5 '>
      <h1 className="font-semibold text-2xl">Task Details</h1>
      <div className="flex flex-col border gap-1 border-gray-300 rounded p-4 shadow-xl">
        <span className='font-medium'>Title:</span>
        <span className='text-black border border-gray-200 rounded p-2'>{task.title}</span>
        <span className='font-medium'>Description: </span>
        <span className='text-black border border-gray-200 rounded p-2'>{task.description}</span>
        <span className='font-medium'>Status: </span>
        <span className='text-black border border-gray-200 rounded p-2'>{task.status}</span>
        <div className='flex gap-2 mt-2'>
          <NavLink to={`/task/edit/${id}`} className='rounded p-2 border border-green-500 text-green-500'>Edit</NavLink>
          <button onClick={deleteTask} className='rounded p-2 border border-red-500 text-red-500'>Delete</button>
        </div>
      </div>
      {task.status === 'pending' ? <NavLink to='/tasks' className="bg-black text-white rounded p-2 text-center">Back to lists</NavLink> :
      <NavLink to='/donetasks' className="bg-black text-white rounded p-2 text-center">Back to lists</NavLink>
      }
     </div>
  )
}

export default ViewTask
