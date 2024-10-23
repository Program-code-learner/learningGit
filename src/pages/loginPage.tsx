import { useAuth } from '../context/context';
import React from 'react'



const loginPage : React.FC = () => {
  const {isAuthenticated,login,logout} = useAuth();
  const submit=()=>{
    login();
  }
  return (
    <>
        <form action="" onSubmit={submit}>
                <input type="text" placeholder='name'/>
                <input type="text" placeholder='email'/>
                <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default loginPage