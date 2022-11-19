import React from 'react'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import Box from '@mui/material/Box'
const drawerWidth=240
const NavBar = () => {
  const NavItems=['Student Login ','Admin ','Contact Administration']
  return (
    <div><AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
  >
    <Toolbar>
      
     <Typography sx={{flexGrow:1}}>Students Management Panel SMP </Typography>
      <Typography>Logout</Typography>
      
    </Toolbar>
  </AppBar></div>
  )
}

export default NavBar