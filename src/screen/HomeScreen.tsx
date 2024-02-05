
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const HomeScreen = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  useEffect(()=>{
    if(!token){
      navigate('/login');
    }
  },[token])


  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default HomeScreen
