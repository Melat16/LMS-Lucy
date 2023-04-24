import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import WhyShouldILearnToCode from "../components/WhyShouldILearnToCode";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function Landing(){
    return(

<Container>
    <Navbar/>
    <Home/>
    <WhyShouldILearnToCode/>
    <WhyChooseUs/>
    <Footer/>
</Container>
    )
}
const Container = styled.div`
width:100%;

`