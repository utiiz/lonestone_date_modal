
import React, {useEffect, useState} from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: rgba(0, 0, 0, 0.35);
  font-size: 13px;
  margin-right: 10px;
`;

const Value = styled.span`
  color: black;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  padding: 5px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5)
`;



const DateTime = ({text, value}) => {
  return (
    <Container>
      <Text>{ text }</Text>
      <Value>{ value }</Value>
    </Container>
  );
  }
  
  export default DateTime;
  