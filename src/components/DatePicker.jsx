
import React, {useEffect, useState} from "react"
import styled from "styled-components"
import DateTime from "./DateTime";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
`;

const Title = styled.span`
  color: black;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 15px;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  flex: 1;
  padding: 15px 20px;
  color: white;
  color: ${props => props.colored ? "white" : "rgba(0, 0, 0, 0.75)"};
  background: ${props => props.colored ? "#3281ff" : "white"};
  border: ${props => props.colored ? "none" : "1px solid rgba(0, 0, 0, 0.5)"};
  border-radius: 7.5px;
`;

const EmptySpace = styled.div`
  flex: 2;
`;


const DatePicker = () => {
  const [months, setMonths] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <Container>
      <Row>
        <Title>Schedule Response</Title>
      </Row>
      <Row>
        <Column>
          <DateTime flex={2} text="Date" value="09/04/2018"/>
          <DateTime text="Time" value="03:00 AM"/>
        </Column>
      </Row>
      <Row>
        <Calendar/>
      </Row>
      <Row>
        <Column>
          <Button colored={true}>Schedule</Button>
          <Button>Cancel</Button>
          <EmptySpace/>
        </Column>
      </Row>
    </Container>
  );
  }
  
  export default DatePicker;
  