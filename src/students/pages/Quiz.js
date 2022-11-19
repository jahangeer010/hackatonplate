import React, { useEffect, useState } from 'react'


const questions=[
    {
questionsText:"How many days are there in a week",
answerOptions:[
  {answerText:"2",isCorrect:false},
  {answerText:"9",isCorrect:false},
  {answerText:"3",isCorrect:true},
  {answerText:"4",isCorrect:false}

],
} ,
{
  questionsText:"How many days are there in a week",
  answerOptions:[
    {answerText:"2",isCorrect:false},
    {answerText:"9",isCorrect:false},
    {answerText:"3",isCorrect:true},
    {answerText:"4",isCorrect:false}
  
  ],
  }

]

const Quiz = () => {
  const [showquiz,setQuiz]=useState([])
  useEffect(()=>{
    setQuiz(questions)
  },[])
  return (
    <>
    {showquiz.map((e)=>{
      return(
        <>
        {console.log(e)}
        
        </>
      )
    })}
    </>
  )
}

export default Quiz