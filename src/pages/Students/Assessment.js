import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useForm } from "react-hook-form";
import Header2 from "../../components/Header2";
import Studbar from '../../components/Studbar';

import '../../Assets/Staffs.css';
import '../../Assets/Account2.css';

function Assessment() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken')

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken])

  return (
    <div id='Assessment'>
      <Helmet>
        <title>Assessment - Student</title>
      </Helmet>
      <Header2/>
        <div id='main'>
            <Studbar/>
        </div>
    </div>
  )
}

export default Assessment;