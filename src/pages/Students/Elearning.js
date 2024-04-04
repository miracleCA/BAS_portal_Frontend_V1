import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useForm } from "react-hook-form";

function Elearning() {

  const navigate = useNavigate();
  const studtoken = localStorage.getItem('studtoken')

    useEffect(() => {
        if (!studtoken) {
            navigate("/student/login");
        }
    }, [navigate, studtoken])

  return (
    <div>
      <Helmet>
        <title>Elearning - Student</title>
      </Helmet>
    </div>
  )
}

export default Elearning;