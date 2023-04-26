import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
export default function Packages(){
    const { id } = useParams();
    const [course, setCourse] = useState(null);
  
    useEffect(() => {
      async function fetchCourse() {
        try {
          const response = await axios.get(`http://208.68.36.33:5000/api/v1/course/${id}`);
          setCourse(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      }
      fetchCourse();
    }, [id]);
  
    if (!course) return <div>Loading...</div>;
  
    return (
      <div>
        <h1>{course.Name}</h1>
        <p>{course.Description}</p>
      </div>
    );
  }
  
