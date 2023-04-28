import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";

export default function Packages(){
    const {id} = useParams();
    const [course, setCourse] = useState(null);
  console.log(id);
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
      <Container>
      <H1>{course.Name}</H1>
  <Container2>


     
{course.Packages && course.Packages.map((pack) => (
          <Div>
            <H3>{pack.PackageName}</H3>
            <P>{pack.Description}</P>
                <Ul>
    <Li>Grade Level: {pack.GradeLevel}</Li>
    <Li>Coding Experience: {pack.CodingExperience}</Li>
    <Li>Duration: {pack.Duration}</Li>
    <Li>Price: {pack.Price}</Li>
    
</Ul> 
            
          
            </Div>
        ))}   
      
          
    
   
    <Button >Enroll</Button>
  </Container2> 
</Container>
    );
  }
  const Container = styled.div`
  height: 90vh;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height:auto; 
  }
`;
const P = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
    font-size:16px;
  }
`;

const H1 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 10px;
  text-align: center;
  color: rgb(71, 64, 64);

  @media only screen and (max-width: 768px) {
    font-size: 28px ;
    margin-left:10px;
    margin-top:40px;
  }
`;

const Container2 = styled.div`
  height: 510px;
  width: 100%;
  max-width: 1350px;
  background-color: rgb(247, 229, 253);
  margin-left: 130px;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  
  // Media Queries
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0px;
    height: auto;
  }
`;

const Div = styled.div`
  height: 400px;
  width: 350px;
  margin-left: 80px;
  margin-right: 30px;
  margin-top: 50px;
  margin-bottom: 30px;
  display: block;
  background:rgb(96, 57, 147);

  
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Div2 = styled.div`
  height: 470px;
  width: 700px;
  margin-right: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top:160px;
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Ul = styled.ul`
  list-style: circle;
  padding-left:90px;
  padding:top:50px;

  @media screen and (max-width: 768px) {
    list-style: disc;
  }
`;

const Li = styled.li`
color:white;
  text-align: left;
  padding-bottom: 10px;
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  height: 50px;
  width: 150px;
  margin-top: 40px;
  background-color: rgb(248, 134, 18);
  border: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    height: 40px;
    width: 120px;
    margin-top: 20px;
    margin-bottom: 80px;
  }
`;
const Button2 = styled.button`
color:white;
font-size: 18px;
height:45px;
width: 130px;
margin-top:10px;
background-color:rgb(248, 134, 18) ;
border:none;
`
const Input = styled.input`
width: 480px;
height: 40px;
border-radius:10px;
border-style:solid;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);
margin-bottom:15px;
margin-left:25px;
padding-left:20px;

::placeholder {
    color:rgb(96,57,147);
   }

`

const Confirmbtn = styled.button`
border-radius: 8px;
border-style:solid;
background-color:rgb(96,57,147);
width: 100px;
height: 45px;
border-color:rgb(96,57,147);
margin-left: 0px;
margin-top: 10px;
color:white;
`

const Datebtn = styled.button`
border-radius: 8px;
border-style:solid;
background-color:white;
width: 150px;
height: 40px;
border-color:rgb(96,57,147);
margin-right: 10px;
margin-top: 0px;
color:rgb(96,57,147);

`
const Timebtn = styled.button`
border-radius: 8px;
border-style:solid;
background-color:rgb(96,57,147);
width: 90px;
height: 40px;
border-color:rgb(96,57,147);
margin-left: 10px;
margin-top: 0px;
color:white;
`
const H2 = styled.p`
color:rgb(96,57,147);
margin-left:150px;
font-size:22px;
font-weight:200px;
`
const ButtonDiv = styled.div`
margin: auto;
`