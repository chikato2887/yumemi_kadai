import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  margin: 0 auto;
`