import React from "react";
import styled from 'styled-components'
import image1 from '../assets/girl.png'
import Background from "../assets/bg2.png"
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link ,useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useState } from "react";
import axios from "axios";


export default function Home(){

  const [open, setOpen] = React.useState(false);
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhone] = useState('');
  const [Students, setStudents
  ] = useState([
    { GradeLevel: '',  CodingExperiance: '' },
  ]);

  const addFields = () => {
    setStudents
    ([...Students
      , { GradeLevel: '',  CodingExperiance: '' }]);
  };

  const removeFields = (index) => {
    const newStudents
    = [...Students
    ];
    newStudents
    .splice(index, 1);
    setStudents
    (newStudents
      );
  };

  const handleInputChange = (index, event) => {
    const values = [...Students
    ];
    if (event.target.name === 'GradeLevel') {
      values[index].GradeLevel = event.target.value;
    } else if (event.target.name === ' CodingExperiance') {
      values[index].CodingExperiance = event.target.value;
    }
    setStudents
    (values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { Email, PhoneNumber,Students  };
    axios
      .post('http://208.68.36.33:5000/api/v1/user', formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
      
  };
  
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
          <form onSubmit={handleSubmit}>
   
       <Phone 
          inputStyle={{width: '250px',
            height: '45px',
            borderRadius:'10px',
            borderStyle:'solid',
            paddingLeft:'60px',
            borderColor: 'rgb(96,57,147)',
            borderWidth:'0.6px',
            backgroundColor: 'rgb(236, 236, 236)',
            marginBottom:'5px',
            marginRight:'5px'}}
      country={"us"}
      type="tel"
      enableSearch={true}
      value={PhoneNumber}
      onChange={(value) => setPhone(value)}
      placeholder="Enter phone number"
      required
    />
      
      <Input2
        type="email"
        value={Email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter email"
        required
      />

      {Students.map((child, index) => {
        return (
          <div key={index}>
            <Select
              name="GradeLevel"
              value={child.GradeLevel}
              onChange={(event) => handleInputChange(index, event)}
              required
            >
              <Option value="">Select grade level</Option>
              <Option value="Grade 2-3">Grade 2-3</Option>
              <Option value="Grade 4-5">Grade 4-5</Option>
              <Option value="Grade 6-8">Grade 6-8</Option>
              <Option value="Grade 11-12">Grade 11-12</Option>
            </Select>

            <Select
              name=" CodingExperiance"
              value={child.CodingExperiance}
              onChange={(event) => handleInputChange(index, event)}
              required
            >
      <Option value="">Select coding level</Option>
      <Option value="No-Experiance">No-Experiance</Option>
      <Option value="Beginner-Level">Beginner-Level</Option>
      <Option value="Intermediate-Level">Intermediate-Level</Option>
      <Option value="Experianced">Experianced</Option>
    </Select>

            <Removebtn onClick={() => removeFields(index)}>-</Removebtn>
          </div>
        );
      })}

     <Addmorebtn onClick={addFields}>Add More Children</Addmorebtn>
      <br />
    
        <Submitbtn type = 'submit'>Submit</Submitbtn>
                  
    </form>          
        </DialogContent>
        
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
  height: 65vh;
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

const Phone = styled(PhoneInput)`
margin-bottom:10px;
`;

const Select = styled.select`
width: 250px;
height: 45px;
border-radius:10px;
border-style:solid;
padding-left:10px;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);
margin-bottom:10px;
margin-right:5px;
padding-right:5px;
`

const Option = styled.option`
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
const Input2 = styled.input`
width: 490px;
height: 40px;
border-radius:10px;
border-style:solid;
padding-left:10px;
border-color: rgb(96,57,147);
border-width:0.6px;
background-color: rgb(236, 236, 236);
margin-bottom:15px;
margin-right:5px;
::placeholder {
  color:black;
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