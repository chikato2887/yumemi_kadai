import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import CheckBox from "../atom/CheckBox";
import { prefectures } from "../../constants"
import { prefectureStoreType } from "../../store/prefecture.store";
import { ResourceManager } from "../../api/resource";

interface IProps {
  prefectures?: prefectureStoreType;
}

@inject("prefectures")
@observer
export default class Prefecture extends Component<IProps> {

  resourceManager = new ResourceManager();

  onSelected = async (code) => {
    const { setTargetPrefectureCode, selectedPrefectureCodes } = this.props.prefectures;
    setTargetPrefectureCode(code);
    selectedPrefectureCodes.forEach(prefCode => {
      this.resourceManager.add(prefCode);
    })
  }

  render() {
    const { selectedPrefectureCodes } = this.props.prefectures;
    return (
      <>
        <h2>都道府県</h2>
        <Wrapper>
          {prefectures.map(prefecture => 
            <CheckBox 
              text={prefecture.prefName}
              prefCode={prefecture.prefCode} 
              onChange={this.onSelected}
              checked={selectedPrefectureCodes.includes(prefecture.prefCode)}
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