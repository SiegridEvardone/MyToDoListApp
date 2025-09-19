import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='p-4'>
      <nav className='flex justify-between p-4 text-xs rounded bg-white shadow-lg border border-gray-200 sm:text-sm sm:px-8 md:px-12'>
        <h3 onClick={() => navigate('/')}><strong>My ToDoList App</strong></h3>
        <ul className='flex gap-4 md:gap-6 lg:gap-8 font-medium'>
          <li><NavLink to='/tasks'>Tasks</NavLink></li>
          <li><NavLink to='/doneTasks'>Completed Tasks</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar
