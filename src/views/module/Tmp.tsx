import React, { Component } from "react";

import {getTotalPopulations, IPopulationComposition} from "../../api/api";

class Tmp extends Component {
  state = {
    responses: []
  }

  async componentDidMount() {
    const populations = await getTotalPopulations(11, 11362);
    if(!populations) return ;
    this.setState({responses: populations})
  }

  render() {
    return (
      <ul>
        {this.state.responses.map((res:IPopulationComposition) => <li>{res.value}</li>)}
        <p>
          {/* {this.state.responses} */}
        </p>
      </ul>
    );
  }
}

export default Tmp;