import React from "react";
import styled from "styled-components"
import Background from "../assets/Ellipse 6.png"
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import  {Phone}  from "@material-ui/icons";
import  {Email}  from "@material-ui/icons";


export default function Footer(){
    return(
<Main>
<Container>
    <Left>
<H1>LUCY</H1>
<H6>Lorem ipsum dolor <FacebookIcon />  <TwitterIcon /> <InstagramIcon /></H6>


<Hr/>

<H1>Location</H1>
<H6>Lorem ipsum dolor</H6>

<Hr/>
<span><H6><Phone/> 0115 567890 </H6> <H6><Email/>info@lucy.com</H6> </span>  
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
  @media (max-width: 768px) {
    background:rgb(96,57,147);
  }
`;

const Container = styled.div`
  height: 450px;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    height: 620px;
    display:block;
    padding-top:0.7px;
  }
`;

const Last = styled.div`
  height: 70px;
  background-color: rgb(108, 63, 168);
  width: 100%;
  margin: 0px;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: lighter;
  color: white;
  text-align: center;
  padding-top: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Hr = styled.hr`
width:550px;
@media (max-width: 768px) {
    font-size: 14px;
    width:300px;
  }
`

const H6 = styled.h6`
  font-size: 18px;
  font-weight: lighter;
  color: white;
  text-align: start;
  margin-left: 120px;
  margin-bottom: 10px;
  margin-top: 5px;

  // Media query for screens less than 768px wide
  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0;
    text-align: center;
  }
`;

// Define styles for Left component
const Left = styled.div`
  float: left;
  width: 50%;
  height: 350px;
  margin-top: 120px;

  // Media query for screens less than 768px wide
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
    height: 250px;
    float:none;
  }
`;

// Define styles for Right component
const Right = styled.div`
  float: right;
  width: 50%;
  height: 300px;
  margin-top: 150px;

  // Media query for screens less than 768px wide
  @media (max-width: 768px) {

    width: 100%;
    margin-top: 40px;
    float:none;
  }
`;

// Define styles for H1 component
const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-left: 120px;
  text-align: start;
  margin-bottom: 20px;

  // Media query for screens less than 768px wide
  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 0;
    text-align: center;
  }
`;
const H2 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-left: 20px;
  color: white;
  text-align: center;
`;

const FormDiv = styled.div`
  width: 430px;
  height: 280px;
  border-style: solid;
  border-color: white;
  border-width: 0.6px;
  margin-left: 250px;

  @media (max-width: 768px) { /* adjust breakpoint as needed */
    width: 350px;
    margin-left: 0;
    box-sizing: border-box;
    padding: 10px;
    padding-left:30px;
    margin-top: 20px;
    border:none;
  }
`;

const Input = styled.input`
  border-radius: 6px;
  border-style: solid;
  border-color: rgb(158, 139, 183);
  margin-bottom: 10px;
  width: 350px;
  height: 40px;
  background-color: rgb(158, 139, 183);
  font-size: 14px;
  font-weight: bold;

  ::placeholder {
    color: white;
    padding-left: 7px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input2 = styled.input`
  border-radius: 6px;
  border-style: solid;
  border-color: rgb(158, 139, 183);
  margin-bottom: 10px;
  width: 350px;
  height: 65px;
  background-color: rgb(158, 139, 183);
  font-size: 14px;
  font-weight: bold;

  ::placeholder {
    color: white;
    padding-left: 7px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border-style: solid;
  border-color: white;
  border-width: 0.7;
  margin-left: 200px;
  background-color: rgb(96, 57, 147);
  margin-top: 10px;
  color: white;
  font-size: 18px;

  @media (max-width: 768px) {
    margin: 0 auto;
    display: block;
    margin-top: 10px;
    width: 130px;
  height: 40px;
  }
`;