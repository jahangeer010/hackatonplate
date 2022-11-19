
import React,{useState} from 'react'
import { Box } from '@mui/system'
import { Paper, TextField, Typography,Button } from '@mui/material'
import SMInput from '../../src/Components/Input'
import SimpleInput from '../../src/Components/SimpleInput'
import { Margin } from '@mui/icons-material'
import Autocomplete from '@mui/material/Autocomplete';

const TrainerRegistration = () => {
  const[userObj,setUserObj]=useState([])
const initialValues={
  firstname:"name",
  LastName:""
  
}
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
const Courses=[
  {
    label:"Web and Mobile"
  }
]
  return (
    <>
      

    <Box sx={{paddingLeft:'50%'}}><h1>Trainer  Registration Form </h1></Box>
    <Box sx={{paddingLeft:32 ,width:500,maxWidth: '70%' }}>   
    <Paper varient="outlined"/>
    
 <Paper sx={{width:1500}}>
 
 <TextField sx={{width:320 ,margin:2}} placeholder="First Name *" type="text" label="First Name"/>
 <TextField sx={{width:320 ,margin:2}} placeholder="Last Name *" type="text" label="Last Name"/>


 <Box sx={{display:'flex' ,margin:2}}> 
 
 
 <Typography sx={{margin:2}}>Select Course</Typography>
 <Autocomplete
      
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField sx={{width:320}} {...params} label="Section" />}
    />
 </Box>

 
 </Paper>
 <Paper sx={{width:1500}}>
 
 <TextField sx={{width:320 ,marginTop:3}} placeholder="First Name *" type="text" label="contact"/>
 
 <TextField sx={{width:320 ,marginTop:3,marginLeft:3}} placeholder="CNIC" type="text" label ="Ener CNIC "/>
 <TextField sx={{width:320 ,marginTop:3}} placeholder="Qualification *" type="text" label="Qualification"/>
 </Paper>
 <Paper sx={{width:1500}}>
 
 
 
 
 <Box sx={{display:'flex' ,margin:2}}> 

 <Autocomplete
      
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField sx={{width:320}} {...params} label="Cources Allowed" />}
    />

 </Box>

 
 </Paper>
 <Button variant="contained" sx={{margin:5,marginLeft:"200%"}}>Submit</Button>

</Box>
    
    </>
  )
}

export default TrainerRegistration