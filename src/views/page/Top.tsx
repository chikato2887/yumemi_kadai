import React, { Component } from "react";
import styled from "styled-components"

import Prefecture from "../template/Prefectures";
import Charts from "../template/Charts";

export default class Top extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Prefecture />
          <Charts />
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  & > h2 {
    margin-top: 20px;
  }
`