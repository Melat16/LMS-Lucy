import React from "react";
import styled from "styled-components"
import Logo from "../assets/IMG_0984 1.png"
import { Link } from "react-router-dom";
import axios from "axios";


export default function Navbar(){

   const  handleButtonClick = () => {
  //   axios.post('http://208.68.36.33:5000/api/v1/course', {
  //     Name: 'Python',
  //     Description: 'Introduction to python programming',
  //     price: 49.99,
  //     skills: ['Python'],
  //     level:2,
  //     duration:'10 months',
  //     schedule:new Date(2021, 11, 31) 
  //   })
  //   .then(response => {
  //     const data = response.data;
  //     console.log(data);
  //     // do something with the data
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }
  
  axios.get('http://208.68.36.33:5000/api/v1/user')
  .then(response => {
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
}

    return(
<Container>
    <Leftcontainer>
    <Link to='/'>
    <img src={Logo} alt="Logo" style={{
        width:'90px',
        height:'80px'
    }}/>
     </Link>
    </Leftcontainer>
    <Rightcontainer>
    <Button onClick={handleButtonClick}>Get Started</Button>
    </Rightcontainer>
</Container>
    )
}


const Leftcontainer = styled.div`
  height: 20%;
  width: 50%;
  margin-left: 5%;
  padding-top: 2%;
  float: left;

  @media (max-width: 768px) {
    height: 15%;
    width: 40%;
    margin-left: 2%;
  }
`;

const Rightcontainer = styled.div`
  height: 18%;
  width: 45%;
  float: right;
  padding-top: 3%;

  @media (max-width: 768px) {
    height: 12%;
    width: 35%;
    padding-top: 2%;
  }
`;

const Container = styled.div`
  height: 120px;
  width: 100%;
  @media (max-width: 768px) {
    height: 90px;
  }
`;

const Button = styled.button`
  height: 60px;
  width: 160px;
  background-color: rgb(96, 57, 147);
  font-size: 16px;
  font-weight: bold;
  border: none;
  margin-top: 10px;
  float: right;
  margin-right: 60px;
  color: white;
  @media (max-width: 768px) {
    height: 40px;
    width: 120px;
    margin-top: 5px;
    margin-right: 20px;
    font-size: 14px;
    float: none;
  }
}`;
