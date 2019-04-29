import React from "react";
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

const StyledInput = styled.input`
  appearance: none;
  font-family: inherit;
  font-weight: bold;
  font-size: inherit;

  border-radius: 4px;
  border: 1px solid #222;
  padding: 15px;
`;

export default class SayConsole extends React.Component {
  state = {
    text: "hello 👋"
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  sayConsole = () => {
    if (this.state.text) {
      console.log(this.state.text);
    }
  };

  render() {
    return (
      <div>
        <StyledInput onChange={this.handleChange} value={this.state.text} />{" "}
        <StyledButton onClick={this.sayConsole}>{`CONSOLE.LOG`}</StyledButton>{" "}
      </div>
    );
  }
}
