import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";

export default function SingleCourse(){
    return(
        
<Container>
<Navbar/>
<Course/>
<Footer/>
</Container>
    )
}

const Container= styled.div`
width:100%;
`
