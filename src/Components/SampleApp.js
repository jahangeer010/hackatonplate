import React, { useEffect, useState } from 'react'
import {db} from "../DatabaseFirebase/firebase"
import {uid} from "uid"
import { getDatabase, ref, onValue, set, remove} from "firebase/database";

const SampleApp = () => {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([])
  const handleTodoChange=(e)=>{
    
    setTodo(e.target.value)
    // console.log("todo data"+todo)
  }
  //write
    const sendData=()=>{
    const uuid=uid();
          set(ref(db,`/${uuid}`),{
        todo,
        uuid
      });
    setTodo("")  
    } 
    
  // Read
  useEffect(()=>{
  onValue(ref(db),snapshot=>{
    setTodos([])
    const data=snapshot.val();
    
    if(data!==null){
      Object.values(data).map((todo)=>{
        setTodos(oldArray=>[...oldArray,todo])
      })
    }
  })
  },[])
  //update 
  
  
  //Delete
  const handleDelete=(todo)=>{
    remove(ref(db,`/${todo.uuid}`));
  }
    return (
    <>
    <input type="text" value={todo} onChange={handleTodoChange}/>
   
   
    <button onClick={sendData}>Submit</button>
   <br/>
  {todos.map((todo)=>(
    <>
    <h1 key={todo.uuid}>{todo.todo}</h1>
    <br/>
    <button>update</button>
    <button  onClick={()=>handleDelete(todo)}>Delete</button>
    </>
  ))}
    </>
  )
}

export default SampleApp