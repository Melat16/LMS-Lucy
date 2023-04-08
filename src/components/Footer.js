import React from "react";
import styled from "styled-components"
import Background from "../assets/Ellipse 6.png"


export default function Footer(){
    return(
<Main>
<Container>
    
</Container>
<Last>
<P>Lucy All rights reserved.</P>
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