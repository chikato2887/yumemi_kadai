import React, { useState } from "react";
import styled from "styled-components"
import { FormControlLabel, Checkbox } from "@material-ui/core";

export default (props) => {
  const [isSelected, changeSelect] = useState(false);

  return (
    <Wrapper>
      <FormControlLabel
        control={
          <Checkbox
            checked={isSelected}
            onChange={() => changeSelect(!isSelected)}
            name={`pref-${props.prefCode}`}
            color="primary"
          />
        }
        label={props.text}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25%;
`