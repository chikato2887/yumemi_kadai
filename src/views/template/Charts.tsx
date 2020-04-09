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
import randomColor from "randomcolor";

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
            top: 5, right: 50, left: 20, bottom: 5,
          }}
          >
            <CartesianGrid />
            <XAxis dataKey="year" label={{value: "年度", position: 'right', offset: 20}}/>
            <YAxis label={{value: "人口数", position: 'top', offset: 10}} />
            <Tooltip />
            <Legend align="right" verticalAlign="top"/>
            {selectedPrefectureCodes.map(prefCode => {
              return <Line  
                        dataKey={`pref-${prefCode}`} 
                        key={prefCode} 
                        name={codeToName[prefCode]}
                        stroke={randomColor({seed: prefCode ** 3 })}
                        />
            })}
        </LineChart>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding-top: 20px;
`