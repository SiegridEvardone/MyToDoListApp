import { useEffect, useState } from 'react'
import api from '../api';
import { NavLink } from 'react-router-dom';

const DoneTasks = () => {
 const [tasks, setTasks] = useState([]);
 
   useEffect(() => {
     const getTasks = async () => {
       try{
         const res = await api.get('/tasks');
         setTasks(res.data);
       }catch(err){
         console.error("Failed getting data.", err);
       }
     }
 
     getTasks();
   },[])
   
   const completedTask = tasks.filter((task) => task.status === 'completed');
 
   return (
     <div className='min-h-screen flex flex-col gap-2 px-5 mt-5 '>
       <h1 className="font-semibold text-2xl">My Completed Tasks</h1>
       <div className="border border-gray-300 rounded p-4 shadow-xl">
        {completedTask.length > 0 ? (
          <ul className="list-disc list-inside flex flex-col gap-1 text-sm">
           {completedTask.map((task) => (                         
               <NavLink to={`/task/view/${task.id}`} key={task.id} className="flex justify-between border border-gray-200 rounded p-2">
                <span>{task.title}</span>
                <span className="text-gray-400 italic">{task.status}</span>
              </NavLink>     
             ))}
         </ul>
         ) : (<p className='text-gray-600 italic'>No Completed task yet.</p>)
      }
         
       </div>
       <NavLink to='/' className="bg-black text-white rounded p-2 text-center">Back</NavLink>
     </div>
   )
}

export default DoneTasks
