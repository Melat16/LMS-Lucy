import react from 'react';
import styled from "styled-components"

const Container = styled.div`
height :85vh;
`
const Sub = styled.div`
height:100px;
width:900px;
background:rgb(221, 207, 227);
margin-left:150px;
border-radius:16px;
margin-bottom:20px;
`
const Sub2 = styled.div`
height:100px;
width:900px;
background:rgb(221, 207, 227);
margin-left:450px;
border-radius:16px;
margin-bottom:20px;
`
const Sub3 = styled.div`
height:100px;
width:900px;
background:rgb(221, 207, 227);
margin-left:150px;
border-radius:16px;
margin-bottom:20px;
`
const Sub4 = styled.div`
height:100px;
width:900px;
background:rgb(221, 207, 227);
margin-left:520px;
border-radius:16px;
margin-bottom:20px;
`
const P =styled.div`
padding:20px;
color: black;

`
const H1 = styled.h1`
font-size:46px;
font-weight:bold;
margin-bottom:70px;
margin-top:60px;
`
export default function WhyChooseUs(){
    return(

<Container>
    <H1>Why Choose Us?</H1>
    <Sub>

        <P>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</P>
    </Sub>
    <Sub2>

        <P>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</P>
    </Sub2>
    <Sub3>

        <P>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</P>
    </Sub3>

    <Sub4>

        <P>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</P>
    </Sub4>
</Container>
    )
}