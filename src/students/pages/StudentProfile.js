import { Divider, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {db} from "../../DatabaseFirebase/firebase"
import { getDatabase, ref, onValue, set, remove} from "firebase/database";
import Card from '@mui/material/Card';


const StudentProfile = () => {
  const[stdata,setStudent]=useState([])
  useEffect(()=>{
const dbRef= ref(db,"Students");
    onValue(dbRef,snapshot=>{
      setStudent([])
      let records= [];
     snapshot.forEach(childSnapshot=>{
      let Keyname=childSnapshot.key;
      let data=childSnapshot.val();
      records.push({"key":Keyname,"data":data})
     })
            
      if(records!==null){
        Object.values(records).map((todo)=>{
          setStudent(oldArray=>[...oldArray,todo])
        })
      }
    })
    },[])
  return (
    <><Box sx={{paddingLeft:"20%"}}>
<Typography>Students Profile</Typography>
    {stdata.map((e)=>{
      return(
        <>
        { 
        <>
        <Paper elevation={6} sx={{ maxWidth:400 }}>
         
         {console.log(e)}
         <Typography>RoleNumber:<b>{e.data.RoleNumber}</b></Typography>
        <Typography>First Name: {e.data.firstname}</Typography>
        <Typography>Last Name: {e.data.LastName}</Typography>
        <Typography>CNIC No: {e.data.cninc}</Typography>
        <Typography>Age:{e.data.birthdate}</Typography>
        <Typography>Course: {e.data.Course}</Typography>
        <Typography>ContactNumber: {e.data.contact}</Typography>
        <Typography>FatherName: {e.data.fatherName}</Typography>
        <Typography>Emergency Contact Number:<span style={{color:'red'}}>{e.data.EmergencyContact}</span></Typography>
        </Paper>
        <Divider sx={{padding:1}}/>
</>      }
        </>
      )
    })}
    
    </Box>
    
    </>
  )
}

export default StudentProfile
