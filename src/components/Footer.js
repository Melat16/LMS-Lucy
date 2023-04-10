import React from "react";
import styled from "styled-components"
import Background from "../assets/Ellipse 6.png"
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";


export default function Footer(){
    return(
<Main>
<Container>
    <Left>
<H1>LUCY</H1>
<H6>Lorem ipsum dolor <FacebookIcon />  <TwitterIcon /> <InstagramIcon /></H6>


<hr style={{width :'550px'}}/>

<H1>Location</H1>
<H6>Lorem ipsum dolor</H6>

<hr style={{width :'550px'}}/>

    </Left>

    <Right>
<FormDiv>
<H2>Contact Us</H2>
<Input placeholder="Email"/>
<Input2 placeholder="Comment" />
<Button>Submit</Button>

</FormDiv>
    </Right>
</Container>
<Last>
<P> &copy; 2023 Lucy All rights reserved.</P>
</Last>
</Main>
    )
}
const Main = styled.div`

background-image: url(${Background});

`
const Container = styled.div`
height:450px;
margin-bottom:0px;
`
const Last = styled.div`
height:70px;
background-color:rgb(108, 63, 168);
width:100%;
margin: 0px;
`

const P = styled.p`
font-size: 18px;
font-weight:lighter;
color:white;
text-align: center;
padding-top: 15px;
`

const H6 = styled.h6`
font-size: 18px;
font-weight:lighter;
color:white;
text-align: start;
margin-left:120px;
margin-bottom:15px;
margin-top:5px;
`
const Left = styled.div`
float:left;
width:50%;
height:350px;
margin-top:120px;
`

const Right = styled.div`
float:right;
width:50%;
height:300px;
margin-top:150px;

`

const H1 = styled.h1`
font-size: 30px;
font-weight:bold;
color: white;
margin-left:120px;
text-align: start;
margin-bottom:20px;

`
const H2 = styled.h1`
font-size: 22px;
font-weight:bold;
margin-left:20px;
color: white;
text-align: center;

`
const FormDiv = styled.div`
width:430px;
height:280px;
border-style:solid;
border-color:white;
border-width:0.6px;
margin-left:250px;

`

const Input = styled.input`
border-radius: 6px;
border-style:solid;
border-color:rgb(158, 139, 183);
margin-bottom:10px;
width:350px;
height:40px;
background-color:rgb(158, 139, 183);
font-size: 14px;
font-weight:bold;

::placeholder {
       color: white;
       padding-left:7px;
   }
`
const Input2 = styled.input`
border-radius: 6px;
border-style:solid;
border-color:rgb(158, 139, 183);
margin-bottom:10px;
width:350px;
height:65px;
background-color:rgb(158, 139, 183);
font-size: 14px;
font-weight:bold;

::placeholder {
       color: white;
       padding-left:7px;
   }
`

const Button = styled.button`
width:150px;
height:50px;
border-style:solid;
border-color:white;
border-width:0.7;
margin-left:200px;
background-color:rgb(96,57,147);
margin-top:10px;
color:white;
font-size:18px
`