import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import CheckBox from "../atom/CheckBox";
import { prefectures } from "../../constants"
import { prefectureStoreType } from "../../store/prefecture.store";

interface IProps {
  prefectures?: prefectureStoreType;
}

@inject("prefectures")
@observer
export default class Prefecture extends Component<IProps> {
  render() {
    return (
      <>
        <h2>都道府県</h2>
        <Wrapper>
          {prefectures.map(prefecture => 
            <CheckBox 
              text={prefecture.prefName}
              prefCode={prefecture.prefCode} 
              key={prefecture.prefCode}/> )}
        </Wrapper>
      </>
    );
  }
}


// TODO: 影を足す
const Wrapper = styled.div`
  height: 250px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: scroll;

`