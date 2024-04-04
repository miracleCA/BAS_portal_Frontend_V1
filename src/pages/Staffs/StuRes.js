import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import {Helmet} from "react-helmet";
import axios from 'axios';
import Header from "../../components/Header";
import Staffsdbar from '../../components/Staffsdbar';
import '../../Assets/Staffs.css';
import '../../Assets/Assignment.css';
import '../../Assets/Assignment2.css'

function AddResult() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  const userid = localStorage.getItem('user');
  const update = localStorage.getItem('update');

  const [pdata, setPdata] = useState([]);
  const [mdata, setMdata] = useState([]);

  const [selectedclass, setSelectedClass] = useState("");
  const [term, setTerm] = useState()
  const [file, setFile] = useState()


  const { id } = useParams();

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
        if (!update) {
          navigate("/staff/login");
        }

        const mngdat = async () => {
          try {
              const response = await fetch(`https://api.brilliantavenirschools.com/staffs/${userid}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token
                }
              });
              if (!response.ok) {
                throw new Error('ERROR!!!');
              }
              const data = await response.json();   
                  setMdata(data);
              }
          catch (error) {
              console.error('Error Fetching data:', error);
          }
      }

        const pupils = async () => {
            try {
                const response = await fetch(`https://api.brilliantavenirschools.com/pupils/${update}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
                });
                if (!response.ok) {
                throw new Error('ERROR!!!');
                }
                const data = await response.json();  
                    setPdata(data);
            }
            catch (error) {
                console.error('Error Fetching data:', error);
            }
        }

      mngdat()
      pupils()
    }, [id, navigate, token, update, userid]);

  const result = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append('pupil', pdata._id);
        formData.append('term', term);
        formData.append('class', selectedclass);
        formData.append('file', file);
        formData.append('staff', userid);

      await axios.post('https://api.brilliantavenirschools.com/results', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token
        },
      })
       window.location.reload();
     /* .then((response) => {
        console.log(response.data);
      }) */
    } catch (error) {
      console.error('Error uploading file:', error);
    }
};

  return (
    <div id='Result'>
      <Helmet>
        <title>Result - Student</title>
        <meta name="viewport" content="width=2500,initial-scale=1,shrink-to-fit=no"/>
      </Helmet>
      <Header/>
      <div id='main' style={{display: "flex"}}>
        <Staffsdbar/>
        <div id='rowcont' style={{margin: "1%", paddingLeft: "unset"}}>
          <div className='row' id='assrow'style={{display: "unset", margin: "inherit"}}>
            <div className='row' id='r1'>
              <span id='sp1'>
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <div className='col'>Results</div>
              <span>
                  <i class="fa-solid fa-wrench"></i>
              </span>
              <span>
                  {/* <i class="fa-solid fa-angle-up"></i> */}
                  <i class="fa-solid fa-angle-down"></i>
              </span>
              <span id='splst'>
                  <i class="fa-solid fa-xmark"></i>
              </span>
            </div>
            <div className='row' id='mr2' style={{width: "-webkit-fill-available"}}>
              <div className='row' id='mr21'>
                <form onSubmit={result} style={{width: '100%'}} encType='multipart/form-data'>
                  <table>
                    <tr>
                      <th>pupil</th>
                      <th>Choose Term</th>
                      <th>Choose Class</th>
                      <th>teacher</th>
                      <th>file</th>
                    </tr>
                    <tr>
                      <td>{pdata.firstname + ' ' + pdata.lastname}</td>
                      <td>
                        <select value={term} onChange={(e) => setTerm(e.target.value)} id="quiz">
                          <option value=""></option>
                          <option value="Ist Term">Ist Term</option>
                          <option value="2nd Term">2nd Term</option>
                          <option value="3rd Term">3rd Term</option>
                        </select>
                      </td>
                      <td>
                        <select value={selectedclass} onChange={(e) => setSelectedClass(e.target.value)}>
                          <option value=""></option>
                          <option value="Creche Teletubbies">Creche Teletubbies</option>
                          <option value="Pre-Nursery Teletubbies">Pre-Nursery Teletubbies</option>
                          <option value="Nursery 1 Cherry">Nursery 1 Cherry</option>
                          <option value="Nursery 2 Lavender">Nursery 2 Lavender</option>
                          <option value="Nursery 3 Almonds">Nursery 3 Almonds</option>
                          <option value="Grade 1 Unicorn">Grade 1 Unicorn</option>
                          <option value="Grade 2 Tulip">Grade 2 Tulip</option>
                          <option value="Grade 3 Explorer">Grade 3 Explorer</option>
                          <option value="Grade 4 Comets">Grade 4 Comets</option>
                          <option value="Grade 5">Grade 5</option>
                        </select>
                      </td>
                      <td>{mdata.firstname + ' ' + mdata.lastname}</td>
                      <td>
                        <input type='file' onChange={(e) => setFile(e.target.files[0])} filename='file' name='file'/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                          <input type='submit' style={{padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none"}}/>
                      </td>
                    </tr>
                </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddResult;