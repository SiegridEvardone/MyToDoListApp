import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api  from '../api';

const Tasks = () => {
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


  return (
    <div className='min-h-screen flex flex-col gap-2 px-5 mt-5 '>
      <h1 className="font-semibold text-2xl">My Tasks</h1>
      <div className="border border-gray-200 rounded p-4 shadow-xl">
        <ul className="list-disc list-inside flex flex-col gap-1 text-sm">
          {tasks
            .filter((task) => task.status === "pending") 
            .map((task) => (      
              <NavLink to={`/task/view/${task.id}`} key={task.id} className="flex justify-between border border-gray-200 p-2 rounded">
                <span>{task.title}</span>
                <span className="text-gray-400 italic">{task.status}</span>
              </NavLink>                  
            ))}
        </ul>
      </div>
      <NavLink to='/addtask' className="bg-black text-white rounded p-2 text-center">Add task</NavLink>
    </div>
  )
}

export default Tasks
