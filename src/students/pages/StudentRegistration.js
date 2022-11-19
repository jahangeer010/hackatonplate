import React,{useState} from 'react'
import { Box } from '@mui/system'
import { Paper, TextField, Typography,Button,MenuItem } from '@mui/material'
import SMInput from '../../Components/Input'
import SimpleInput from '../../Components/SimpleInput'
import { CurrencyYenTwoTone, Margin } from '@mui/icons-material'
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';

// 

import {db} from "../../DatabaseFirebase/firebase"
import {uid} from "uid"
import { getDatabase, ref, onValue, set, remove} from "firebase/database";
// 
const StudentRegistration = () => {
  const [todo,setTodo]=useState();
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const[Course,SetCourse]=useState([]);
  
  const[contact,setContact]=useState([])
  const[cnic,setCnic]=useState([])
  const[fatherName,setFatherName]=useState([])
  const [Cnicfather,setFCNIC]=useState([])  
  const [fatherContact,setFatherContact]=useState([])
  const [EmergencyContact,setEmergency]=useState([])
  const[birthdate,setBirthDate]=useState([])
  const [course,setCourse]=useState('');
  const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
//Handle Input Function
const handleTodoChange=(e)=>{
    
  setTodo(e.target.value)
  console.log(todo)
}
//course handle function

const handleChange=(e)=>{
  setCourse(e.target.value);
  console.log(course)
}

//Sending Data to firebase function
const sendData=()=>{
  const uuid=uid();

        set(ref(db,`Students/${uuid}`),{
          
          firstname:firstName,
          LastName:lastName,
          Course:Course,
          RoleNumber:"ABC"+uuid ,
          contact:contact,
          cninc:cnic,
          fatherName:fatherName,
          Cnicfather:Cnicfather,
          fatherContact:fatherContact,
          EmergencyContact:EmergencyContact,
          birthdate:birthdate,
          registrationDate:"data"
    });
  setTodo("")  
  } 

  return (
    <>
    <Box sx={{paddingLeft:'50%'}}><h1>Student Registration Form </h1></Box>
    <Box sx={{paddingLeft:32 ,width:500,maxWidth: '70%' }}>   
    <Paper varient="outlined"/>
    
 <Paper sx={{width:1500}}>
 
 <TextField sx={{width:320 ,margin:2}}  value={firstName}onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First Name *" type="text" label="First Name"/>
 <TextField sx={{width:320 ,margin:2}} value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last Name *" type="text" label="Last Name"/>
    

 <Box sx={{display:'flex' ,margin:2}}> 
 <Typography sx={{margin:2}}>Select Course</Typography>
 <TextField sx={{width:320 ,margin:2}} value={Course} onChange={(e)=>{SetCourse(e.target.value)}} placeholder="Course Name*" type="text" label="Course Name"/>
 <TextField type="text" label="Lead Trainer ID *"></TextField>
       <TextField label='Select Course' select  value={course} onChange={handleChange} sx={{width:150}}>
      <MenuItem value='16'>16 Months </MenuItem>
      <MenuItem value='8'> 8 Months</MenuItem>
      

     </TextField>
 
 </Box>

 
 </Paper>
 <Paper sx={{width:1500}}>
 
 <TextField sx={{width:320 ,marginTop:3}} value={contact} onChange={(e)=>{setContact(e.target.value)}}  type="text" label="contact"/>
 
 <TextField sx={{width:320 ,marginTop:3,marginLeft:3}} value={cnic} onChange={(e)=>{setCnic(e.target.value)}} placeholder="CNIC" type="text" label ="Ener CNIC "/>
 <TextField sx={{width:320 ,marginTop:3,marginLeft:3}} value={fatherName} onChange={(e)=>{setFatherName(e.target.value)}} type="text" label="fatherName"/>
 <TextField sx={{width:320 ,marginTop:3,marginLeft:3}} value={Cnicfather} onChange={(e)=>{setFCNIC(e.target.value)}} type="text" label="Father CNIC "/>
 </Paper>
 <Paper sx={{width:1500}}>
 
 <TextField sx={{width:320 ,marginTop:3}} value={fatherContact} onChange={(e)=>{setFatherContact(e.target.value)}} type="text" label="Father Contact"/>
 
 <TextField sx={{width:320 ,marginTop:3,marginLeft:3}} value={EmergencyContact} onChange={(e)=>{setEmergency(e.target.value)}} type="text" label="Emergency Contact "/>
 
 <TextField sx={{width:320 ,marginTop:3,marginLeft:3}} value={birthdate} onChange={(e)=>{setBirthDate(e.target.value)}} type="date" label="Date of Birth "/>

 </Paper>
 <Button variant="contained"  onClick={sendData} sx={{margin:5,marginLeft:"200%"}}>Submit</Button>
 

</Box>
    
    </>
  )
}

export default StudentRegistration