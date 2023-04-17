import React from "react";
import styled from 'styled-components'
import image1 from '../assets/girl.png'
import Background from "../assets/bg2.png"
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home(){

    const [open, setOpen] = React.useState(false);
    const [formFields, setFormFields] = useState([
      { phoneNumber: '', grade: '', experience: '' },
    ])
  
    const handleFormChange = (event, index) => {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    }
  
    const submit = (e) => {
      e.preventDefault();
      console.log(formFields);
      handleClose();
    }
  
    const addFields = () => {
      let object = {
        grade: '',
        experience: ''
      }
  
      setFormFields([...formFields, object])
    }
  
    const removeFields = (index) => {
      let data = [...formFields];
      data.splice(index, 1)
      setFormFields(data)
    }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
<Container>
<Left>

    <H1> <span style={{color: "rgb(96,57,147)"}}>Code</span> , <span style={{color: "rgb(58, 175, 255)"}}>Create</span> and <span style={{color: "rgb(248, 134, 18)"}}> Connect</span></H1>
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
        <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center'}}>Register</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'rgb(96,57,147)' , fontSize:'18px', fontWeight: 'bold'}}>
             Experience
          </DialogContentText>
          <form onSubmit={submit}>
            <Input name='number' placeholder="Phone Number" />
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <Input2
                name='grade'
                placeholder='Grade'
                onChange={event => handleFormChange(event, index)}
                value={form.grade}
              />
              <Input2
                name='experience'
                placeholder='Experience'
                onChange={event => handleFormChange(event, index)}
                value={form.experience}
              />
              <Removebtn onClick={() => removeFields(index)}>-</Removebtn>
            </div>
          )
        })}
      </form>
      <Addmorebtn onClick={addFields}>Add More Children</Addmorebtn>
      <br />
          
        </DialogContent>
        <DialogActions>
        <Link to='/courses'>
        <Submitbtn onClick={submit}>Submit</Submitbtn>
                  </Link>
          
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
background-repeat:no-repeat;
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
width: 490px;
height: 40px;
border-radius:10px;
border-style:solid;
padding-left:10px;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);
margin-bottom:5px;
margin-right:5px;

::placeholder {
  color:rgb(96,57,147);
 }


`
const Input2 = styled.input`
width: 235px;
height: 40px;
border-radius:10px;
border-style:solid;
padding-left:10px;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);
margin-bottom:5px;
margin-right:5px;
::placeholder {
  color:rgb(96,57,147);
 }


`
const Submitbtn = styled.button`
height:35px;
width: 110px;
background-color:rgb(96,57,147);
border-style:solid;
border-color:rgb(96,57,147);
margin-left:160px;
margin-top:10px;
color:white;
align-items:center;
`

const Removebtn = styled.button`
border-radius: 50%;
border-style:solid;
background-color:white;
width: 30px;
height: 30px;
color:red;
border-color:rgb(96,57,147);
margin-left: 10px;
border:solid;
border-color:red;
border-width:0.3px;
`
const H1 = styled.h1`
font-size:52px;
font-weight:400px;
margin-bottom:4px;
word-spacing: 1px;
color: rgb(71, 64, 64);
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
margin-right:60px;
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

const Addmorebtn = styled.button`
height:35px;
width: 150px;
background-color:white;
border-style:solid;
border-color:rgb(96,57,147);
margin-left:160px;
margin-top:10px;
color:rgb(96,57,147);
align-items:center;
`