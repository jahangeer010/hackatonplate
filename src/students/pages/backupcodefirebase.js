// THIS CODE IS TAKEN FROM OLD APP.JS

// import React,{useState} from 'react'
// import {db} from './firebase'
// import { getDatabase, ref, set } from "firebase/database";
// import {uid} from 'uid'
// const App = () => {
//   const [todo,setTodo]=useState("");
//   const handleTodoChange=(e)=>{
//     setTodo(e.target.value)
// console.log(todo)
//   }
//   //write
//   const writetoDatabase=()=>{
//     const uuid=uid()
//     set(ref(db,`/${uuid}`),{
//       todo:todo,
//       uuid,
//     });
//     setTodo("")
//   }
//   // read
//   //update
//   //delete
  
//   return (
//     <div className='App'>
//       <input  type="text" value={todo} onChange={handleTodoChange}/>
//       <button onClick={writetoDatabase}>submit</button>
//       </div>
//   ) 
// }

// export default App