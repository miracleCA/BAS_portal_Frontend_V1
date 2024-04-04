/* import app from './Firebase.js';
 */import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Staffs from './pages/Staffs/Staffs';
import Mngstudents from './pages/Staffs/Mngstudents';
import Assignment from './pages/Staffs/Assignment';
import Tutorials from './pages/Staffs/Tutorials';
import HolidayProject from './pages/Staffs/Holidayproject';
import Liveclass from './pages/Staffs/Liveclass';
import Intramail from './pages/Staffs/Intramail';
import Quiz from './pages/Staffs/Quiz';
import Holiday from './pages/Staffs/Holiday';
import Leave from './pages/Staffs/Leave';
import Account from './pages/Staffs/Account';
import Account2 from './pages/Students/Account2';
import Students from './pages/Students/Students';
import Assessment from './pages/Students/Assessment';
import Assignment2 from './pages/Students/Assignment';
import Newsletter from './pages/Students/Newsletter';
import Bills from './pages/Students/Bills';
import Result from './pages/Students/Result';
import Elearning from './pages/Students/Elearning';
import StaffLogin from './Auth/StaffLogin';
import StudentLogin from './Auth/StudentLogin';
import UpdateStaff from "./pages/Staffs/UpdateStaff";
import UpdateStudent from "./pages/Students/UpdateStudent";
import DeleteStaff from "./pages/Staffs/DeleteStaff";
import DeleteStudents from "./pages/Students/DeleteStudents";
import AddResult from './pages/Staffs/StuRes';

import './Assets/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={ <Home/> } />
          <Route exact path="/staff" element={ <Staffs/> } />
          <Route exact path="/staff/quiz" element={ <Quiz/> } />
          <Route exact path="/staff/assignment" element={ <Assignment/> } />
          <Route exact path="/staff/mngstudents" element={ <Mngstudents/> } />
          <Route exact path="/staff/tutorials" element={ <Tutorials/> } />
          <Route exact path="/staff/holiday" element={ <Holiday/> } />
          <Route exact path="/staff/liveclass" element={ <Liveclass/> } />
          <Route exact path="/staff/holidayproject" element={ <HolidayProject/> } />
          <Route exact path="/staff/intramail" element={ <Intramail/> } />
          <Route exact path="/staff/user" element={ <Account/> } />
          <Route exact path="/student" element={ <Students/> } />
          <Route exact path="/student/account" element={ <Account2/> } />
          <Route exact path="/student/bills" element={ <Bills/> } />
          <Route exact path="/student/assessment" element={ <Assessment/> } />
          <Route exact path="/student/assignment" element={ <Assignment2/> } />
          <Route exact path="/student/result" element={ <Result/> } />
          <Route exact path="/student/newsletter" element={ <Newsletter/> } />
          <Route exact path="/student/elearning" element={ <Elearning/> } />
          <Route exact path="/staff/login" element={ <StaffLogin/> } />
          <Route exact path="/student/login" element={ <StudentLogin/> } />
          <Route exact path="/staff/update/:id" element={ <UpdateStaff/> } />
          <Route exact path="/student/update/:id" element={ <UpdateStudent/> } />
          <Route exact path="/student/result/:id" element={ <AddResult/> } />
          <Route exact path="/student/delete/:id" element={ <DeleteStudents/> } />
          <Route exact path="/staffs/delete/:id" element={ <DeleteStaff/> } />
          <Route exact path="/leave" element={ <Leave/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;