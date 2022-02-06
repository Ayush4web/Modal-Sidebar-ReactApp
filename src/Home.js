import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'
const Home = () => {
  const {setIsSidebarOpen,setIsModalOpen} = useGlobalContext()
  return (
    <main>
      <button className="sidebar-toggle" onClick={()=>setIsSidebarOpen(true)}>
        <FaBars />
      </button>
      <button className='btn' onClick={()=>setIsModalOpen(true)}>Show Modal</button>
    </main>
  )
}

export default Home
