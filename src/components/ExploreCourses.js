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
      } catch (error) {
        console.error(error);
      }
    }
    fetchCourses();
  }, []);


    return(

<Container>
<H1>Explore Courses</H1>
{courses.map((course) => (
        <Container2 key={course._id}>
            <Div><H3>{course.name}</H3> <InnerDiv><H4>Price: {course.price}</H4></InnerDiv></Div>
        </Container2>
      ))}
</Container>
    )
}

const Container= styled.div`
width:100%;
height:50vh;
`
const H1 = styled.h1`
font-size:42px;
font-weight:bold;
margin-bottom:60px;
text-align: center;
color: rgb(71, 64, 64);
`

const Container2 = styled.div`
height:220px;
width:1400px;
margin-left:140px;
display:flex;
flex-direction: row;
margin-bottom:80px;
`
const Div = styled.div`
height: 190px;
width:350px;
margin-left:60px;
border-style: solid;
border-radius: 15px;
background-color: red;
border-color:rgb(248, 134, 18);
background-color:rgb(248, 134, 18) ;
`
const H3 = styled.h4`
font-size: 24px;
font-weight:bold;
margin-top: 20px;
color: white;
`
const H4 = styled.h4`
font-size: 20px;
font-weight:bold;
margin-top: 10px;
color: white;
`
const InnerDiv = styled.div`
height: 60px;
width:290px;
margin-left:20px;
margin-top:20px;
border-style: solid;
border-radius: 40px;
background-color: red;
border-color: rgb(96,57,147);
background-color: rgb(96,57,147);
align-items:center;
justify-content:center;

`

const InnerDiv2 = styled.div`
height: 60px;
width:290px;
margin-left:20px;
margin-top:20px;
border-style: solid;
border-radius: 40px;
background-color: red;
border-color:rgb(58, 175, 255);
background-color:rgb(58, 175, 255);

`

const InnerDiv3 = styled.div`
height: 60px;
width:290px;
margin-left:20px;
margin-top:20px;
border-style: solid;
border-radius: 40px;
background-color: red;
border-color:rgb(248, 134, 18);
background-color:rgb(248, 134, 18) ;

`