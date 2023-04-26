import React from "react";
import styled from "styled-components"
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from "react";
import image1 from '../assets/scratch.jpg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function RecommendedCourses(){ const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectDate1 = () => {
    setSelectedDate(new Date(2022, 3, 20));
    setSelectedTime(null);
  }

  const handleSelectDate2 = () => {
    setSelectedDate(new Date(2022, 3, 21));
    setSelectedTime(null);
  }

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  }

  const renderTimeSlots = () => {
    const timeslots = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

    return (
      <>
        {timeslots.map(timeslot => (
          <Timebtn key={timeslot} onClick={() => handleSelectTime(timeslot)} disabled={!selectedDate}>
            {timeslot}
          </Timebtn>
        ))}
      </>
    );
  }
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  
    const [open, setOpen] = React.useState(false);
    const [opend2,setOpend2] = React.useState(false);
    const [opend3,setOpend3] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
      const handleClickOpend2 = () => {
        setOpend2(true);
        setOpen(false);
      };
      const handleClickOpend3 = () => {
        setOpend3(true);
        setOpend2(false)
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleClosed2 = () => {
        setOpend2(false);
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
    <img alt='background' src={image1} style={{
              height: '220px',
              width: '300px',
            }} />
        </Div4> 
        <Div3>  
          <Ul>
    <Li>Price ~ 1200 birr</Li>
    <Li>Level ~ Beginner</Li>
    <Li>Duration ~ 3 months </Li>
    <Li>Schedule ~ Mon - Friday from 4pm - 6pm</Li>
    
</Ul> 
        </Div3>   
    </Div>
<Div2>
<H3>Scratch Programming</H3>
<P>Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsa Lorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero excepturi est vero ipsa Id iste eaque et neque
         veritatis vel magni atque? Quo vero excepturi est vero ipsaLorem ipsum dolor sit amet. Id iste eaque et neque veritatis vel magni
         atque? Quo vero </P>
<H4>Skills</H4> 
         <Button onClick={handleClickOpen}>Enroll</Button>


         <Dialog open={open} onClose={handleClose}>
  <DialogTitle style={{fontSize:'40px', fontWeight:'bold' , textAlign: 'center' , color:'rgb(96,57,147)'}}>Pick start date</DialogTitle>
  <DialogContent>
    <ButtonDiv>
  <Datebtn onClick={handleSelectDate1}>Thursday, April 20</Datebtn>
      <Datebtn onClick={handleSelectDate2}>Friday, April 21</Datebtn>
      </ButtonDiv>

      {selectedDate && (
        <>
         <H2>Pick time</H2>
          {renderTimeSlots()}
          
          <br />
          {selectedTime && (
            <p>
              Selected date and time: {selectedDate.toLocaleDateString()} at {selectedTime}
            </p>
          )}
        </>
      )}
  </DialogContent>
  <DialogActions>
    <Confirmbtn onClick={handleClickOpend2}> Confirm </Confirmbtn>
  </DialogActions>
</Dialog>           
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

</Div2>

<Div5>
<Wrapper>
        <Accordion>
          {data.map((item, i) => (
            <Item key={i.toString()}>
              <Title  onClick={() => toggle(i)}>
                <H5>{item.question}</H5>
                <Span>{selected == i ? "-" : "+"}</Span>
              </Title>
              {selected == i && (
                <Content>
                  <H6>{item.answer}</H6>{" "}
                </Content>
              )}
            </Item>
          ))}
        </Accordion>
      </Wrapper>
</Div5>
  </Container2>
</Container>

    )
}

const data = [
  {
    question: "Week 1",
    answer:
      "Introduction to programming",
  },
  {
    question: "Week 2",
    answer:
    "Introduction to programming",
},
  {
    question: "Week 3",
    answer:
      "Introduction to programming",
  },
  {
    question: "Week 4",
    answer:
      "Introduction to programming",
  },
  {
    question: "Week 5",
    answer:
      "Introduction to programming",
  },

];

const Wrapper = styled.div`
  display: flex;
  height:inherit;
  width: 350px;
  margin-top:40px;
  margin-left:10px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height:inherit;
    padding:5px;
  }
`;

const Accordion = styled.div`
  width: 280px;
  height:inherit;
  
`;

const Item = styled.div`
  margin-bottom: 25px;
  /* padding-bottom: 40px; */
  background-color: rgb(255, 244, 238);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: white;
  cursor: pointer;
  border-style: solid;
  border-width: 0.2px;
  border-color: rgb(248, 134, 18);
`;

const H5 = styled.h6`
  font-size: 18px;
  font-weight: bold;
  margin-left:20px;
`;

const Content = styled.div`
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  background-color: rgb(255, 244, 238);
  text-align: start;
  position: relative;
  padding-left:5px;
  height:80px;
`;

const Span = styled.span`
  padding-right: 30px;
`;
const P = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  color: black;

  @media (max-width: 768px) {
    padding: 10px;
    font-size:16px;
  }
`;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height:auto; 
  }
`;

const H1 = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 10px;
  text-align: center;
  color: rgb(71, 64, 64);

  @media only screen and (max-width: 768px) {
    font-size: 28px ;
    margin-left:10px;
    margin-top:40px;
  }
`;

const Container2 = styled.div`
  height: 510px;
  width: 100%;
  max-width: 1350px;
  background-color: rgb(247, 229, 253);
  margin-left: 130px;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  
  // Media Queries
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0px;
    height: auto;
  }
`;

const Div = styled.div`
  height: 220px;
  width: 400px;
  margin-left: 50px;
  display: block;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Div2 = styled.div`
  height: 470px;
  width: 500px;
  margin-right: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top:160px;
  }
`;

const Div3 = styled.div`
  height: 220px;
  width: 300px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
  height: 220px;
  width: 300px;
  border-style: solid;
  border-width: 0.8px;
  border-color: rgb(248, 134, 18);
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  height: 360px;
  width: 350px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top:40px;
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  color: rgb(71, 64, 64);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const H4 = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  color: rgb(71, 64, 64);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const H6 = styled.h6`
  font-size: 18px;
  font-weight: lighter;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Ul = styled.ul`
  list-style: circle;

  @media screen and (max-width: 768px) {
    list-style: disc;
  }
`;

const Li = styled.li`
  text-align: left;
  padding-bottom: 10px;
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  height: 50px;
  width: 150px;
  margin-top: 40px;
  background-color: rgb(248, 134, 18);
  border: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    height: 40px;
    width: 120px;
    margin-top: 20px;
    margin-bottom: 80px;
  }
`;
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
margin-left: 0px;
margin-top: 10px;
color:white;
`

const Datebtn = styled.button`
border-radius: 8px;
border-style:solid;
background-color:white;
width: 150px;
height: 40px;
border-color:rgb(96,57,147);
margin-right: 10px;
margin-top: 0px;
color:rgb(96,57,147);

`
const Timebtn = styled.button`
border-radius: 8px;
border-style:solid;
background-color:rgb(96,57,147);
width: 90px;
height: 40px;
border-color:rgb(96,57,147);
margin-left: 10px;
margin-top: 0px;
color:white;
`
const H2 = styled.p`
color:rgb(96,57,147);
margin-left:150px;
font-size:22px;
font-weight:200px;
`
const ButtonDiv = styled.div`
margin: auto;
`