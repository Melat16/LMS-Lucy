import React from "react";
import styled from "styled-components"
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';

export default function RecommendedCourses(){
  
    const [opend2,setOpend2] = React.useState(false);
    const [opend3,setOpend3] = React.useState(false);


      const handleClickOpend2 = () => {
        setOpend2(true);
      };
    
      const handleClosed2 = () => {
        setOpend2(false);
      };

      const handleClickOpend3 = () => {
        setOpend3(true);
        setOpend2(false)
      };
    
      const handleClosed3 = () => {
        setOpend3(false);
      }
    return(

<Container>
  <H1>Recommended Courses</H1>
  <Container2>

<Div>
    <Div4>
        <H3>Scratch</H3>
        <H4>78 Courses</H4>
        </Div4>    
    </Div>
<Div2>
<H3>Starter Packages</H3>
<Ul>
    <Li>1hr/week</Li>
    <Li>1hr/week</Li>
    <Li>1hr/week</Li>
</Ul>
</Div2>


<Div3>
    <H3>Price</H3>
    <H6>123$</H6>
    <Button onClick={handleClickOpend2}>Enroll</Button>

   
    <Dialog open={opend2} onClose={handleClosed2}>
      <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center' , color:'rgb(96,57,147)'}}>Payment</DialogTitle>
      <DialogContent>
       
        <Input
          placeholder="Account Number"
          type="text"
         
        />
         <Input
          placeholder="Amount"
          type="Number"
         
        />
         <Input
          placeholder="PIN"
          type="Number"
         
        />
      </DialogContent>
      <DialogActions>
        <Confirmbtn onClick={handleClickOpend3}> Confirm </Confirmbtn>
      </DialogActions>
    </Dialog>

    <Dialog open={opend3} onClose={handleClosed3}>
        
        <DialogContent>
          <DialogContentText style={{fontSize:'24px', fontWeight:'bold' , textAlign: 'center', color:'rgb(96,57,147)'}}>Payment Made Successfully!
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
            <Confirmbtn onClick={handleClosed3}>Ok</Confirmbtn>
        </DialogActions>
      </Dialog>

</Div3>
  </Container2>
</Container>

    )
}

const Container= styled.div`
height:52vh;
width:100%;
`
const H1 = styled.h1`
font-size:42px;
font-weight:bold;
margin-bottom:60px;
margin-top: 50px;
text-align: center;
color: rgb(71, 64, 64);
`
const Container2 = styled.div`
height:220px;
width:1200px;
background-color: rgb(247, 229, 253);
margin-left:200px;
display:flex;
flex-direction: row;
margin-bottom:80px;

`
const Modal = styled.div`
height:180px;
width:500px;
background-color:white;
display:flex;
flex-direction: row;
border-style: solid;
border-width:0.8px;
border-color:rgb(248, 134, 18) ;
margin-bottom: 20px;
`
const Div = styled.div`
height: 220px;
width:400px;
margin-left:50px;

`
const Div2 = styled.div`
height: 220px;
width:400px;

`
const Div3 = styled.div`
height: 220px;
width:400px;

`

const Div4 = styled.div`
height:150px;
width:300px;
border-style:solid;
border-width:0.8px;
border-color:rgb(248, 134, 18) ;
margin-top: 30px;
`
const Div5 = styled.div`
height: 180px;
width:250px;

`
const Div6 = styled.div`
height: 180px;
width:250px;

`
const H3 = styled.div`
font-size: 24px;
font-weight:bold;
margin-top: 30px;
color: rgb(71, 64, 64);
`
const H6 = styled.h6`
font-size:18px;
margin-top :15px ;
margin-bottom: 20px;
color: rgb(71, 64, 64);

`
const H4 = styled.h4`
font-size:20px;
color: rgb(71, 64, 64);
font-weight:500px;
`
const Ul = styled.ul`
list-style: circle;
margin-left:90px;

`
const Li = styled.li`
text-align: left;
padding-bottom:10px;
padding-left: 10px;
`

const Button = styled.button`
color:white;
font-size: 18px;
height:45px;
width: 130px;
margin-top:0px;
background-color:rgb(248, 134, 18) ;
border:none;
`
const Button2 = styled.button`
color:white;
font-size: 18px;
height:45px;
width: 130px;
margin-top:10px;
background-color:rgb(248, 134, 18) ;
border:none;
`
const Input = styled.input`
width: 480px;
height: 40px;
border-radius:10px;
border-style:solid;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);
margin-bottom:15px;
margin-left:25px;
padding-left:20px;

::placeholder {
    color:rgb(96,57,147);
   }

`

const Confirmbtn = styled.button`
border-radius: 8px;
border-style:solid;
background-color:rgb(96,57,147);
width: 100px;
height: 45px;
border-color:rgb(96,57,147);
margin-left: 30px;
margin-top: 0px;
color:white;
`