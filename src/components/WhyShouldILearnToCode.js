import React from "react"
import styled from "styled-components"


export default function WhyShouldILearnToCode(){
    return(

<Container>
    <H1>Why Should I Learn To Code?</H1>
    <SubContainer>
    <Container2>
    <Sub>1</Sub>
    <H4>Lorem</H4>
    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Container2>
    <Container2>
    <Sub>2</Sub>
    <H4>Lorem</H4>
    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Container2>
    <Container2>
    <Sub>3</Sub>
    <H4>Lorem</H4>
    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Container2>
    </SubContainer>
</Container>
    )
}
const Container = styled.div`
width:100%;
height:100vh;
background-color:rgb(96,57,147);
`

const H1 = styled.h1`
font-size:42px;
font-weight:bold;
color:white;
padding-top: 90px;
`
const Container2 = styled.div`
width:400px;
height:400px;
margin-left:90px;
margin-top: 80px;
`
const Sub = styled.div`
border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 40px;

    background: rgb(248, 134, 18);
    color: white;
    text-align: center;
    font-size: 32px;
    font-weight:bold;
    
margin-left:140px;
    
`
const SubContainer = styled.div`
display: flex;
flex-direction: row;
`
const P= styled.p`
font-size: 18px;
font-weight:200px;
text-align: center;
color:white;
`

const H4 = styled.h4`
font-size: 20px;
font-weight:400px;
text-align: center;
color: white;
`