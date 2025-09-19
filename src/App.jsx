import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import DoneTasks from './pages/DoneTasks';
import Footer from './components/Footer';
import AddTask from './pages/AddTask';
import ViewTask from './pages/ViewTask';
import EditTask from './pages/EditTask';

const App = () => {
  return (
   <div>
    <Navbar />
      <div className='max-w-2xl mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/addtask' element={<AddTask />} />
          <Route path='/donetasks' element={<DoneTasks />} />
          <Route path='/task/view/:id' element={<ViewTask />} />
          <Route path='/task/edit/:id' element={<EditTask />} />
        </Routes>
      </div>
    <Footer/>
    </div>
  )
}

export default App
