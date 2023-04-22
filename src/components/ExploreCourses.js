import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

export default function ExploreCourses(){
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get('http://208.68.36.33:5000/api/v1/course');
        setCourses(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchCourses();
  }, []);



    return(
<>
<H1>Explore Courses</H1>
      <Container>
        
{courses.map((course) => (
       
          <Div key={course._id}>
            <H3>{course.Name}</H3>
            <InnerDiv2><P>{course.Description}</P></InnerDiv2>
          </Div>
        
      ))}
</Container>
</>
    )
}

const Container= styled.div`
width:100%;
height:auto;
max-width: 1350px;
margin-left:190px;
display: flex;
flex-direction: row;
margin-bottom:80px;
`
const H1 = styled.h1`
font-size:42px;
font-weight:bold;
margin-bottom:60px;
text-align: center;
color: rgb(71, 64, 64);
`
const Div = styled.div`
height: 190px;
width:350px;
margin-left:60px;
border-style: solid;
border-radius: 15px;
background-color: red;
border-color:rgb(248, 134, 18);
background-color:rgb(96,57,147) ;
`
const H3 = styled.h4`
font-size: 24px;
font-weight:bold;
margin-top: 20px;
color: white;
`
const P = styled.p`
font-size: 18px;
font-weight:light;
color: white;
text-align:center;
`

const InnerDiv2 = styled.div`
height: 70px;
width:290px;
margin-left:20px;
margin-top:20px;
border-style: solid;
border-radius: 40px;
background-color: red;
border-color:rgb(58, 175, 255);
background-color:rgb(58, 175, 255);

`
