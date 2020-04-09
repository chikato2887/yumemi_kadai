import React, { useState } from "react";
import styled from "styled-components"
import { FormControlLabel, Checkbox } from "@material-ui/core";

export default (props) => {
  return (
    <Wrapper>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.checked}
            onChange={(e) => props.onChange(Number(e.target.value))}
            name={`pref-${props.prefCode}`}
            value={props.prefCode}
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