import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";
import '../../Assets/Mngstudents.css';
import Header from '../../components/Header';
import Staffsdbar from '../../components/Staffsdbar';

function UpdateStudent() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('user');
    const update = localStorage.getItem('update');

    const { id } = useParams();

    const [mdata, setMdata] = useState([]);
    const [pdata, setPdata] = useState([]);

    const [selectedgender, setSelectedGender] = useState("");
    const [selectedreligion, setSelectedReligion] = useState("");
    const [selectedclass, setSelectedClass] = useState("");

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [othername, setOthername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [lga, setLga] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [ename, setEname] = useState("");
    const [eaddress, setEaddress] = useState("");    
    const [eemail, setEemail] = useState("");
    const [ephone, setEphone] = useState("");
    const [erelationship, setErelationship] = useState("");
    const [profile_pic, setProfile_pic] = useState();

    useEffect(() => {

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
                const response = await fetch('https://api.brilliantavenirschools.com/pupils/' + id, {
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
}, [id, token, userid]);

    useEffect(() => {
        if (!token) {
            navigate("/staff/login");
        }
        if(!update) {
            navigate("/staff/login")
        }
    }, [navigate, token, update]);


    const pupdata = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('firstname', firstname);
            formData.append('lastname', lastname); 
            formData.append('othername', othername); 
            formData.append('username', username);
            formData.append('password', password);
            formData.append('email', email);
            formData.append('address', address); 
            formData.append('state', state);
            formData.append('lga', lga);
            formData.append('gender', selectedgender); 
            formData.append('date_of_birth', date_of_birth);
            formData.append('religion', selectedreligion);
            formData.append('blood_group', blood_group);
            formData.append('profile_pic', profile_pic);
            formData.append('class', selectedclass);
            formData.append('emergency_contact_name', ename);
            formData.append('emergency_contact_address', eaddress);
            formData.append('emergency_contact_email', eemail);
            formData.append('emergency_contact_phone', ephone);
            formData.append('emergency_contact_relationship', erelationship);

          await axios.put(`https://api.brilliantavenirschools.com/pupils/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': token
            },
          })
          window.location.reload();
/*           .then((response) => {
            console.log(response.data);
          }) */
        } catch (error) {
          console.error('Error uploading image:', error);
        }
    };

  return (
    <div className='Update'>
        <Helmet>
            <title>Update Student Profile</title>
        </Helmet>
        <Header/>
        <div id='main' style={{display: 'flex'}}>
            <Staffsdbar/>
            <div className='row' id='mainrow' style={{width: '100%', margin: '2%'}}>
                <div className='row' id='r1' style={{width: "100%"}}>
                    <span id='sp1'>
                        <i className="fa-regular fa-bell"></i>
                    </span>
                    <div className='col'>{mdata.role == "Admin" ? "Manager Update" : "My Students Update"}</div>
                    <span>
                        <i className="fa-solid fa-wrench"></i>
                    </span>
                    <span>
                        {/* <i className="fa-solid fa-angle-up"></i> */}
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <span id='splst'>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <div className='row' id='mr2'>
                    <div className='row' id='mr21'>
                            <form onSubmit={pupdata}>
                                <div style={{display: 'flex', width: '100%', alignItems: 'center', border: '1px solid black'}}>
                                    <span style={{width: 'max-content', borderRight: '1px solid black', height: '50px', padding: '12px', fontWeight: 'bold'}}>Update Student</span>
                                    <span style={{fontSize: '15px', color: 'red', fontWeight: 'bold', display: 'table-cell', height: '50px', padding: '12px'}}>Please make sure you fill up datas before clicking Enter or submit, otherwise you would submit empty datas.</span>
                                </div>
                                    <table id='tabl1' style={{width: '100%', fontSize: '15px'}}>   
                                            <tr>
                                                <th style={{width: "minContent"}}>Firstname</th>
                                                <th style={{width: "minContent"}}>Lastname</th>
                                                <th style={{width: "minContent"}}>Othername</th>
                                                <th style={{width: "minContent"}}>Username</th>
                                                <th style={{width: "minContent"}}>Password</th>
                                                <th style={{width: "minContent"}}>Email</th>
                                                <th style={{width: "minContent"}}>Class</th>
                                                <th style={{width: "minContent"}}>Address</th>
                                                <th style={{width: "minContent"}}>State</th>
                                                <th style={{width: "minContent"}}>LGA</th>
                                            </tr>
                                            {
                                                window.location.pathname == `/student/update/${pdata._id}` ?
                                                    <React.Fragment>
                                                        <tr>
                                                            <td> 
                                                                <input placeholder={pdata.firstname} onChange={(e)=>setFirstname(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.lastname} onChange={(e)=>setLastname(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.othername} onChange={(e)=>setOthername(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.username} onChange={(e)=>setUsername(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.email} onChange={(e)=>setEmail(e.target.value)} type='email'/>
                                                            </td>
                                                            <td>
                                                                <select value={selectedclass} onChange={e => setSelectedClass(e.target.value)}>
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
                                                            <td>
                                                                <input placeholder={pdata.address} onChange={(e)=>setAddress(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.state} onChange={(e)=>setState(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.lga} onChange={(e)=>setLga(e.target.value)} type='text'/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th style={{width: "minContent"}}>Gender</th>
                                                            <th style={{width: "minContent"}}>D.O.B</th>
                                                            <th style={{width: "minContent"}}>Religion</th>
                                                            <th style={{width: "minContent"}}>Blood Group</th>
                                                            <th style={{width: "minContent"}}>G.Name</th>
                                                            <th style={{width: "minContent"}}>G.Email</th>
                                                            <th style={{width: "minContent"}}>G.Phone</th>
                                                            <th style={{width: "minContent"}}>G.Address</th>
                                                            <th style={{width: "minContent"}}>G.Relationship</th>
                                                            <th style={{width: "minContent"}}>Picture</th>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <select value={selectedgender} onChange={e => setSelectedGender(e.target.value)}>
                                                                    <option value=""></option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.date_of_birth} onChange={(e)=>setDate_of_birth(e.target.value)} type='date'/>
                                                            </td>
                                                            <td>
                                                                <select value={selectedreligion} onChange={e => setSelectedReligion(e.target.value)}>
                                                                    <option value=""></option>
                                                                    <option value="Christian">Christian</option>
                                                                    <option value="Islam">Islam</option>
                                                                    <option value="Others">Others</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.blood_group} onChange={(e)=>setBlood_group(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.ename} onChange={(e)=>setEname(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.eemail} onChange={(e)=>setEemail(e.target.value)} type='email'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.ephone} onChange={(e)=>setEphone(e.target.value)} type='number'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.eaddress} onChange={(e)=>setEaddress(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input placeholder={pdata.erelationship} onChange={(e)=>setErelationship(e.target.value)} type='text'/>
                                                            </td>
                                                            <td>
                                                                <input onChange={(e)=>setProfile_pic(e.target.files[0])} type='file' name='profile_pic' accept="image/*"/>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment> :
                                                ""
                                            }
                                                <tr>
                                                <td>
                                                    <input type='submit' style={{float: "right", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none"}}/>
                                                </td>
                                            </tr>
                                    </table>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateStudent;