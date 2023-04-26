import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Packages from "../components/Packages";

export default function SingleCourse(){
    return(
        
<Container>
<Navbar/>
<Packages/>
<Footer/>
</Container>
    )
}

const Container= styled.div`
width:100%;
`
