import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Link ,useNavigate } from "react-router-dom";

export default function ExploreCourses(){
  const navigate=useNavigate();
  const [courses, setCourses] = useState([]);
  

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get('http://208.68.36.33:5000/api/v1/course');
        setCourses(response.data);
        //console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchCourses();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate('/singlecourse');

  }


    return(
<>
<H1>Explore Courses</H1>
      <Container>
        
{courses.map((course) => (
       
          <Div key={course._id}>
            <H3>{course.Name}</H3>
            <InnerDiv2><P>{course.Description}</P><Link to='/courses'>
            
                  </Link></InnerDiv2>

                  <Button onClick={submit}>View More</Button>
           
          </Div>
        
      ))}
</Container>
</>
    )
}
const Button = styled.button`
width:130px;
height:45px;
color:white;
margin-top:10px;
background:rgb(248, 134, 18);
border:none;

`
const Container= styled.div`
width:100%;
height:auto;
max-width: 1350px;
margin-left:150px;
display: flex;
flex-direction: row;
margin-bottom:80px;
@media only screen and (max-width: 768px) {
  margin-left:0px;
  }
`
const H1 = styled.h1`
font-size:30px;
font-weight:bold;
margin-bottom:60px;
text-align: center;
color: rgb(71, 64, 64);
`
const Div = styled.div`
height: 280px;
width:380px;
margin-left:60px;
border-style: solid;
border-radius: 15px;
border-width:0.8px;
border-color:rgb(96,57,147) ;

@media only screen and (max-width: 768px) {
  margin-left:5px;
  }
  `

const H3 = styled.h4`
font-size: 24px;
font-weight:bold;
margin-top: 20px;
color: black;
`
const P = styled.p`
font-size: 18px;
font-weight:light;
color: white;
text-align:center;
`

const InnerDiv2 = styled.div`
height: 120px;
width:310px;
margin-left:30px;
margin-top:5px;
border-style: solid;
border-radius: 10px;
border-color:rgb(58, 175, 255);
background-color:rgb(58, 175, 255);
overflow:hidden;

`