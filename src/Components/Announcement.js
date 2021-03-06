import React from "react";
import styledComponents from "styled-components";

function Announcement() {
  const Container = styledComponents.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Announcement;
