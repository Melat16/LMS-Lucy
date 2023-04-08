import React from "react";
import styled from 'styled-components'


const Container = styled.div`
height: 100vh;
width: 100%;
background:red;
`
const Left = styled.div`
float:left;
width:50%;
height:500px;
background:yellow;

`

const Right = styled.div`
float:right;
width:50%;
height:500px;
background:blue;

`

const H1 = styled.h1`
font-size:36px;
font-weight:bold;
margin-top:90px;
margin-buttom:0px;
background:green;
`

const H5 = styled.h5`
margin-top:0px;
font-size:22px;
font-weight:lighter;
background:green;
`
const Button = styled.button`
height:60px;
width: 200px;
background-color:rgb(96,57,147);
font-size:22px;
font-weight:bold;
border:none;;
margin-right:40px;
color:white;

`
const Sub = styled.div`

border-color:blue;
width:280px
height:250px


`
export default function Home(){
    return(
<Container>
<Left>

    <H1>Code , Create and Connect</H1>
    <H5>We will recommend courses</H5>
    <Sub>
        
    </Sub>
    <Button>Get Started</Button>

</Left>
<Right></Right>

</Container>

    )
}
