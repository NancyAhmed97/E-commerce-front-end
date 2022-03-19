import React from "react";
import styledComponents from "styled-components";
function Navbar() {
  const Container = styledComponents.div`
    height: 60px;
  `;

  const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Left = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Center = styledComponents.div`
  flex: 1;
  text-align: center;
`;
const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>lorem</Left>
          <Center>center</Center>
          <Right>right</Right>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Navbar;
