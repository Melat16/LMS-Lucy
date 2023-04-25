import React from "react";
import styled from "styled-components"
import RecommendedCourses from "../components/RecommendedCourses";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExploreCourses from "../components/ExploreCourses"

export default function Courses(){
    return(
        
<Container>
<Navbar/>
<RecommendedCourses/>
<ExploreCourses/>
<Footer/>
</Container>
    )
}

const Container= styled.div`
width:100%;
@media screen and (max-width: 768px) {
    width: 100%;
  }
`
