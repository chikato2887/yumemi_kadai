import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <Wrapper>
      <h1>Yumemi Kadai</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 60px;
  box-shadow: 0 5px 5px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #66bb6a;
`