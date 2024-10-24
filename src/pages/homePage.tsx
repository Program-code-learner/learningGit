// import { useAuth } from '@/context/context'
import React from 'react'
import { Link } from 'react-router-dom'

const homePage: React.FC = () => {
    // const {isAuthenticated} = useAuth();
  return (
    <div className='flex justify-center bg-slate-500 text-yellow-200 gap-5  w-full h-screen'>
    <div className=' font-bold mr-5'>homePage</div>
    <Link to={'/contact'}>contact</Link>
    <Link to={'/table'}>Table</Link>
    </div>
  )
}

export default homePage