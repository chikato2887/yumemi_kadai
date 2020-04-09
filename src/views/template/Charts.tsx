import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

import { prefectureStoreType } from "../../store/prefecture.store";
import { ResourceManager } from "../../api/resource";
import { codeToNameConverter } from "../../constants";

interface IProps {
  prefectures?: prefectureStoreType;
}

@inject("prefectures")
@observer
export default class Chart extends Component<IProps> {

  resourceManager = new ResourceManager();

  async componentDidMount() {
    const { selectedPrefectureCodes } = this.props.prefectures;
    selectedPrefectureCodes.forEach(prefCode => {
      this.resourceManager.add(prefCode);
    })
  }

  render() {
    const { resourcesPerYear, selectedPrefectureCodes } = this.props.prefectures;
    const codeToName = codeToNameConverter();
    return (
      <Wrapper>
        <LineChart
          width={500}
          height={300}
          data={resourcesPerYear}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
          >
            <CartesianGrid />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedPrefectureCodes.map(prefCode => {
              return <Line type="monotone" dataKey={`pref-${prefCode}`} key={prefCode} name={codeToName[prefCode]}/>
            })}
        </LineChart>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding-top: 20px;
`