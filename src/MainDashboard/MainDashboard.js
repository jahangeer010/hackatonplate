
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './pages/NavBar'
import SideBar from './pages/SideBar'
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
const MainDashboard = () => {
  const data=useSelector(state=>state.counter.value)
  return (
    <>

<SideBar/>
<Box sx={{paddingLeft:34}}>
  Redux data is {data}

</Box>

  <Outlet/>
    </>
  )
}

export default MainDashboard