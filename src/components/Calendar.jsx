import React, {useEffect, useState} from "react"
import Day from "./Day";
import styled from "styled-components"
import { isSameDay } from "../utils/utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const MonthYear = styled.div`
  color: #2053d6;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Calendar = ({days, focusedDay, onChangeDay}) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return (
    <Container>
      <Header>
        <MonthYear>{focusedDay.toLocaleString('en-EN', { month: 'long' }) + " " + focusedDay.getFullYear()}</MonthYear>
      </Header>
      <Grid>
      {
        daysOfWeek.map((day, index) => {
          return (
            <Day value={day.charAt(0)} key={index} />
          )
        })
      }
      {
        days.map((day, index) => {
          return (
            <Day value={day.date.getDate()} isCurrentMonth={day.isCurrentMonth} isFocused={isSameDay(day.date, focusedDay)} key={index} />
          )
        })
      }
    </Grid>
    </Container>
  );
  }
  
  export default Calendar;
  