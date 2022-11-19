import { Box} from '@mui/system'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography,MenuItem } from '@mui/material';


const CreateCourseForm = () => {
const [country,SetCountry]=useState('');
const handleChange=(e)=>{
  SetCountry(e.target.value);
  console.log({country})
}
return (
    <>
    <Box sx={{marginLeft:31}}>
    <h1>Create Quiz Form</h1>
    <Paper elevation={6} sx={{width:1000,height:129}}>
    
    <Box sx={{padding:3}}>
     <TextField label='Course Name' select value={country} onChange={handleChange} sx={{width:190}}>
      <MenuItem value='8'>Web and Mobile </MenuItem>
      <MenuItem value='6'>Flutter</MenuItem>
      

     </TextField>
     
     <TextField sx={{marginLeft:2 }}type="number" label="Number of Quiz*"></TextField>
     <TextField sx={{marginLeft:2 }}type="number" label="Enter Fees in RS"></TextField>
     </Box></Paper>
     {/*  */}
     <Box sx={{paddingTop:3}}>     <Paper elevation={6} sx={{width:1000,height:200}}>
    
      <Box sx={{padding:3}}>
     <TextField type="text" label="Lead Trainer ID *"></TextField>
       <TextField label='Course Duration' select value={country} onChange={handleChange} sx={{width:150}}>
      <MenuItem value='8'>8 Months </MenuItem>
      <MenuItem value='16'> 16 Months</MenuItem>
      

     </TextField>
     <TextField sx={{marginLeft:2 }}type="number" label="Asistant Trainers"></TextField>
     <TextField label='Select Trainers' select value={country} onChange={handleChange} sx={{width:250}}>
      <MenuItem value='PAK'>Pakistan</MenuItem>
      <MenuItem value='US'>USA</MenuItem>
      <MenuItem value='CA'>Canada</MenuItem>

     </TextField>
      
     </Box>
     <Button sx={{marginLeft:3}} variant='contained'>Submit</Button>
     </Paper>

   
     </Box>
       </Box>
    </>
  )
}

export default CreateCourseForm