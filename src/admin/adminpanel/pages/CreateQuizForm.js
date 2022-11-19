import { Box,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CreateQuizForm = () => {
  const [data,setData]=useState([])
  const info=[{
    name:"syed Jahangeer ",
    Fname:"syed junaid khalid"
  }]
  useEffect(()=>{
    setData(info)
  },[])
  return (
    <>
    <Box sx={{paddingLeft:32}}>CreateQuizForm
    {console.log(data)}
    {data.map((e)=>{
      return(
        <>
        <Typography >Name: {e.name}</Typography>
        </>
      )
    })}
    </Box>
    </>
  )
}

export default CreateQuizForm