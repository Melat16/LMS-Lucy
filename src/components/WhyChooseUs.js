import react from 'react';
import styled from "styled-components"


export default function WhyChooseUs(){
    return(

<Container>
    <H1>Why Choose Us?</H1>
    <Sub>

    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Sub>
    <Sub2>

    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Sub2>
    <Sub3>

    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Sub3>

    <Sub4>

    <P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa</P>
    </Sub4>
</Container>
    )
}

const Container = styled.div`
height :85vh;

@media (max-width: 768px) {
     height:115vh;
   }
`
const Sub = styled.div`
height:100px;
width:900px;
background:rgb(221, 207, 227);
margin-left:150px;
border-radius:16px;
margin-bottom:20px;

@media (max-width: 768px) {
     width: 80%;
     margin-left: auto;
     margin-right: auto;
     height:auto;
   }
`
const Sub2 = styled.div`
height:100px;
width:900px;
background:rgb(221, 207, 227);
margin-left:450px;
border-radius:16px;
margin-bottom:20px;

@media (max-width: 768px) {
     width: 80%;
     margin-left: auto;
     margin-right: auto;
     height:auto;
   }
`
const Sub3 = styled.div`
  height: 100px;
  width: 900px;
  background: rgb(221, 207, 227);
  margin-left: 150px;
  border-radius: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
     width: 80%;
     margin-left: auto;
     margin-right: auto;
     height:auto;
   }
`;

const Sub4 = styled.div`
  height: 100px;
  width: 900px;
  background: rgb(221, 207, 227);
  margin-left: 520px;
  border-radius: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
     width: 80%;
     margin-left: auto;
     margin-right: auto;
     height:auto;
   }
`;

const P =styled.div`
  padding: 20px;
  color: black;

  @media (max-width: 768px) {
    padding: auto;
    font-size:14px;
  }
`;

const H1 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 70px;
  margin-top: 60px;
  color: rgb(71, 64, 64);

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;