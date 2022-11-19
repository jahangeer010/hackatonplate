import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import MainDashboard from './MainDashboard/MainDashboard'
import StudentRegistration from './students/pages/StudentRegistration'
import TrainerRegistration from './Trainers/TrainerRegistration'
import Home from './MainDashboard/pages/Home'
import Login from './usersForm/Login'
import CreateCourseForm from "./admin/adminpanel/pages/CreateCourseForm"
import CreateQuizForm from './admin/adminpanel/pages/CreateQuizForm'
import SimpleApp from "./Components/SampleApp"
import StudentProfile from './students/pages/StudentProfile'
import Quiz from '../src/students/pages/Quiz'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/SimpleApp" element={<SimpleApp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<MainDashboard/>}>
      <Route path="StudentRegistration" element={<StudentRegistration/>}/>
      <Route path="TrainerRegistration" element={<TrainerRegistration/>}/>
      <Route path="CreateCourseForm" element={<CreateCourseForm/>}/>
      <Route path="CreateQuiz" element={<CreateQuizForm/>}/>
      <Route path="Quiz" element={<Quiz/>}/>

      <Route path="studentprofile" element={<StudentProfile/>}/>

  </Route>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App