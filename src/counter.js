import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  appearance: none;
  font-family: inherit;
  font-weight: bold;
  font-size: inherit;

  border-radius: 4px;
  border: 1px solid #222;
  padding: 15px;

  text-transform: uppercase;

  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increase = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  decrease = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <StyledButton onClick={this.decrease}>{"Decrease"}</StyledButton>
        <div
          css={css`
            flex-grow: 999;
          `}
        >
          {this.state.count}
        </div>
        <StyledButton onClick={this.increase}>{"Increase"}</StyledButton>
      </div>
    );
  }
}
