import React from "react";
import styled from 'styled-components'
import image1 from '../assets/girl.png'
import Background from "../assets/bg2.png"
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link ,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export default function Home(){
    const navigate=useNavigate();
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
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
      navigate('/courses');

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
      <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center' , color:'rgb(96,57,147)'}}>Register</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'rgb(96,57,147)' , fontSize:'18px', fontWeight: 'bold'}}>
          
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
              width: '500px',
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

@media screen and (max-width: 768px) {
  height: 80vh;
}

@media screen and (max-width: 480px) {
  height: 60vh;
}
`
const Left = styled.div`
  float: left;
  width: 60%;
  height: 500px;
  margin-top: 80px;

  @media(max-width: 768px) {
    width: 100%;
    float: none;
    margin-top: 50px;
  }
`;

const Right = styled.div`
  float: right;
  width: 40%;
  height: 600px;
  margin-top: 10px;

  @media(max-width: 768px) {
   display:none;
  }
`;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
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
  width:110px;
  background-color:rgb(96,57,147);
  border-style:solid;
  border-color:rgb(96,57,147);
  margin-left:160px;
  margin-top:10px;
  color:white;
  align-items:center;

  @media (max-width: 768px) {
    width: 100px;
    margin-left: 80px;
  }

  @media (max-width: 480px) {
    width: 80px;
    margin-left: 40px;
  }
`;

const Removebtn = styled.button`
  border-radius:50%;
  border-style:solid;
  background-color:white;
  width:30px;
  height:30px;
  color:red;
  border-color:rgb(96,57,147);
  margin-left:10px;
  border:solid;
  border-color:red;
  border-width:0.3px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    margin-left: 2px;
  }
`;

const H1 = styled.h1`
  font-size: 52px;
  font-weight: 400px;
  margin-bottom: 4px;
  word-spacing: 1px;
  color: rgb(71, 64, 64);

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`

const H5 = styled.h5`
  margin-top: 0px;
  font-size: 24px;
  font-weight: lighter;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

const Button = styled.button`
  height: 70px;
  width: 230px;
  background-color: rgb(96, 57, 147);
  font-size: 22px;
  font-weight: bold;
  border: none;
  margin-right: 60px;
  color: white;

  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 150px;
    font-size: 16px;
    margin-right: 0px;
  }
`
const Sub = styled.div`
  border-style: solid;
  border-color: rgb(58, 175, 255);
  border-radius: 20px;
  border-width: 1px;
  width: 380px;
  height: 180px;
  margin-left: 250px;
  margin-bottom: 40px;


  @media only screen and (max-width: 768px) {
    /* for screen sizes less than or equal to 768px */
    width: 300px;
    margin-left: 50px;
    height: 150px;
  }

  @media only screen and (max-width: 576px) {
    /* for screen sizes less than or equal to 576px */
    width: 290px;
    margin-left: 40px;
    height: 150px;
  }
`;

const Ul = styled.ul`
  margin-left: 30px;
  margin-top: 30px;
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Li = styled.li`
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  padding-bottom: 10px;
  padding-left: 20px;
  color: rgb(248, 134, 18);

  &::marker {
    color: rgb(58, 175, 255);
    content: "✓";
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
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
@media only screen and (max-width: 768px) {
  font-size: 18px;
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
@media only screen and (max-width: 768px) {
  font-size: 18px;
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