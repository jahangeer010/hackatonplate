import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SMbutton from '../Components/button';
import SMInput from '../Components/Input';
import { useState } from 'react';
import { Grid,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Login() {
const navigate=useNavigate();
    const gotoDashboard=()=>{
    navigate("/dashboard")
}
    const[userObj,setUserObj]=useState([])
// const [userobject,]
    return (
    <>
    <Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Box sx={{display:"flex",justifyContent:"center",alignContent:"center", height:"70vh" , marginTop:"140px"}}>
     

        <Card sx={{ maxWidth: 345}}>
        <Typography variant="h5" sx={{color:'Green'}}> Student Management System </Typography>
        <CardMedia sx={{borderRadius:20}}
            component="img"
            height="100"

            image="adminLogin.png"
            alt="Login Image"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{paddingLeft:10}}>
             
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <SMInput onChange={(e)=>setUserObj({...userObj,email:e.target.value})} type="email" label="Enter Email"/>
        
            </Typography>
            <Typography pt={2}variant="body2" color="text.secondary">
        
             <SMInput onChange={(e)=>setUserObj({...userObj,password:e.target.value})} type="password" label="Enter Password"/>
            </Typography>
        </CardContent>
        <CardActions>
        <SMbutton  onClick={()=>{gotoDashboard()}} label="LogIn" variant="contained"/>
        
 
        </CardActions>
    </Card></Box></Grid></Grid>
    
    </>
  );
}
