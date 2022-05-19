import React, {useEffect, useState} from "react"
import Days from "react-calendar/dist/umd/MonthView/Days";
import styled from "styled-components"

const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 5px;
  background-color: ${props => props.isFocused ? "rgba(0, 0, 0, 0.35)" : "none"};
  border-radius: 5px;
  color: ${props => props.darker ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.35)"};
  font-size: 13px;
  margin-right: 10px;
`;

const Calendar = ({value, isCurrentMonth, isFocused}) => {
  return (
    <Text darker={isCurrentMonth} isFocused={isFocused}>{ value }</Text>
  );
}
export default Calendar;  