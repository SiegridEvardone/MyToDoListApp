import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-8 items-center min-h-screen px-10 pt-40'>
      <h1 className='font-bold text-3xl text-center'>Welcome to My ToDoList App</h1>
      <button onClick={() => navigate('/Tasks')} className='bg-black text-white rounded py-2 px-4 font-medium'>Get Started</button>
    </div>
  )
}

export default Home
