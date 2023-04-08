import React from "react";
import styled from "styled-components"

const Container= styled.div`
height:90px;
background:green;
width:100%;
`

const Button = styled.button`
height:50px;
width: 160px;
background-color:rgb(96,57,147);
font-size:16px;
font-weight:bold;
border:none;
margin-top:17px;
float:right;
margin-right:40px;
color:white;

`
export default function Navbar(){
    return(

<Container>
    <Button>Get Started</Button>
</Container>
    )
}