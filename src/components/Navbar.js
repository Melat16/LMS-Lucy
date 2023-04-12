import React from "react";
import styled from "styled-components"
import Logo from "../assets/IMG_0984 1.png"
import { Link } from "react-router-dom";


const Leftcontainer = styled.div`
height:105px;
float: left;
margin-left:50px;
padding-top: 15px;
`

const Rightcontainer = styled.div`
height:100px;
float: right;
padding-top: 20px;

`

const Container= styled.div`
height:120px;
width:100%;
`

const Button = styled.button`
height:60px;
width: 160px;
background-color:rgb(96,57,147);
font-size:16px;
font-weight:bold;
border:none;
margin-top:10px;
float:right;
margin-right:60px;
color:white;

`
export default function Navbar(){
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
    <Button>Get Started</Button>
    </Rightcontainer>

</Container>
    )
}