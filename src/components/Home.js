import React from "react";
import styled from 'styled-components'
import image1 from '../assets/girl.png'
import Background from "../assets/Frame 39.png"
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Home(){

    const [open, setOpen] = React.useState(false);
    const [opend2,setOpend2] = React.useState(false);
    const [opend3,setOpend3] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpend2 = () => {
    setOpend2(true);
    setOpen(false)
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
  };
    return(
<Container>
<Left>

    <H1>Code , Create and Connect</H1>
    <H5>We will recommend courses</H5>
    <Sub>
        <Ul>
            <Li>
               Scratch programming
            </Li>
            <Li2>
                Python programming
            </Li2>
            <Li3>
            Web development
            </Li3>
        </Ul>
    </Sub>
    <Button onClick={handleClickOpen}>Get Started</Button>
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center'}}>Join Now!</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'rgb(96,57,147)' , fontSize:'18px', fontWeight: 'bold'}}>
             Phone number
          </DialogContentText>
          <Input
            
            id="name"
            label="Email Address"
            type="email"
           
          />
        </DialogContent>
        <DialogActions>
          <Nextbtn onClick={handleClickOpend2}> - </Nextbtn>
        </DialogActions>
      </Dialog>








      <Dialog open={opend2} onClose={handleClosed2}>
        <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center'}}>Almost Done!</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'rgb(96,57,147)' , fontSize:'18px', fontWeight: 'bold'}}>
             Grade
          </DialogContentText>
          <Input
            
            id="name"
            label="Email Address"
            type="email"
           
          />
        </DialogContent>
        <DialogActions>
          <Nextbtn  onClick={handleClickOpend3}> - </Nextbtn>
        </DialogActions>
      </Dialog>







      <Dialog open={opend3} onClose={handleClosed3}>
        <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center'}}>Final Step!</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'rgb(96,57,147)' , fontSize:'18px', fontWeight: 'bold'}}>
             Experience
          </DialogContentText>
          <Input
            
            id="name"
            label="Email Address"
            type="email"
           
          />
        </DialogContent>
        <DialogActions>
          <Nextbtn onClick={handleClose}> - </Nextbtn>
        </DialogActions>
      </Dialog>

</Left>
<Right>
<img alt='background' src={image1} style={{
    marginLeft:'100px',
              height: '550px',
              width: '530px',
            }} />
</Right>

</Container>

    )
}

const Container = styled.div`

background-image: url(${Background});
height: 90vh;
width: 100%;

`
const Left = styled.div`
float:left;
width:60%;
height:500px;
margin-top:80px;
`

const Right = styled.div`
float:right;
width:40%;
height:600px;
margin-top:10px;

`
const Input = styled.input`
width: 480px;
height: 40px;
border-radius:10px;
border-style:solid;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);

`

const Nextbtn = styled.button`
border-radius: 50%;
border-style:solid;
background-color:rgb(96,57,147);
width: 50px;
height: 50px;
border-color:rgb(96,57,147);
margin-left: 40px;
`
const H1 = styled.h1`
font-size:52px;
font-weight:400px;
margin-bottom:4px;
word-spacing: 1px;
`

const H5 = styled.h5`
margin-top:0px;
font-size:24px;
font-weight:lighter;
`
const Button = styled.button`
height:70px;
width: 230px;
background-color:rgb(96,57,147);
font-size:22px;
font-weight:bold;
border:none;;
margin-right:40px;
color:white;

`
const Sub = styled.div`

border-style:solid;
border-color:rgb(58,175,255);
border-radius:20px;
border-width:1px;
width:380px ;
height:180px;
margin-left: 250px;
margin-bottom:40px;
`
const Ul = styled.ul`

margin-left: 30px;
margin-top:30px;
`
const Li = styled.li`
font-size:22px;
font-weight: bold;
text-align: left;
padding-bottom:10px;
padding-left: 20px;
color: rgb(248, 134, 18);
&::marker{
    color: rgb(58, 175, 255);
  content: "✓";
}
`
const Li2 = styled.li`
font-size:22px;
font-weight: bold;
text-align: left;
padding-bottom:10px;
padding-left: 20px;
color: rgb(58, 175, 255);
&::marker{
    color: rgb(58, 175, 255);
  content: "✓";
}
`
const Li3 = styled.li`
font-size:22px;
font-weight: bold;
text-align: left;
padding-bottom:10px;
padding-left: 20px;
color: rgb(248, 134, 18);
&::marker{
    color: rgb(58, 175, 255);
  content: "✓";
}
`