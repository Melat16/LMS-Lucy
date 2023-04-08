import React from "react";
import styled from 'styled-components'
import image1 from '../assets/girl.png'
import Background from "../assets/Frame 39.png"

export default function Home(){
    return(
<Container>
<Left>

    <H1>Code , Create and Connect</H1>
    <H5>We will recommend courses</H5>
    <Sub>
        <Ul>
            <Li>
               Scratch programming
            </Li>
            <Li2>
                Python programming
            </Li2>
            <Li3>
            Web development
            </Li3>
        </Ul>
    </Sub>
    <Button>Get Started</Button>

</Left>
<Right>
<img alt='background' src={image1} style={{
    marginLeft:'100px',
              height: '550px',
              width: '530px',
            }} />
</Right>

</Container>

    )
}

const Container = styled.div`

background-image: url(${Background});
height: 90vh;
width: 100%;

`
const Left = styled.div`
float:left;
width:60%;
height:500px;
margin-top:80px;
`

const Right = styled.div`
float:right;
width:40%;
height:600px;
margin-top:10px;

`

const H1 = styled.h1`
font-size:52px;
font-weight:400px;
margin-bottom:4px;
word-spacing: 1px;
`

const H5 = styled.h5`
margin-top:0px;
font-size:24px;
font-weight:lighter;
`
const Button = styled.button`
height:70px;
width: 230px;
background-color:rgb(96,57,147);
font-size:22px;
font-weight:bold;
border:none;;
margin-right:40px;
color:white;

`
const Sub = styled.div`

border-style:solid;
border-color:rgb(58,175,255);
border-radius:20px;
border-width:1px;
width:380px ;
height:180px;
margin-left: 250px;
margin-bottom:40px;
`
const Ul = styled.ul`

margin-left: 30px;
margin-top:30px;
`
const Li = styled.li`
font-size:22px;
font-weight: bold;
text-align: left;
padding-bottom:10px;
padding-left: 20px;
color: rgb(248, 134, 18);
&::marker{
    color: rgb(58, 175, 255);
  content: "✓";
}
`
const Li2 = styled.li`
font-size:22px;
font-weight: bold;
text-align: left;
padding-bottom:10px;
padding-left: 20px;
color: rgb(58, 175, 255);
&::marker{
    color: rgb(58, 175, 255);
  content: "✓";
}
`
const Li3 = styled.li`
font-size:22px;
font-weight: bold;
text-align: left;
padding-bottom:10px;
padding-left: 20px;
color: rgb(248, 134, 18);
&::marker{
    color: rgb(58, 175, 255);
  content: "✓";
}
`