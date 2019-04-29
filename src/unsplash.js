import React from "react";

// source: https://stackoverflow.com/a/1349426/412627
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default class Unsplash extends React.Component {
  state = {
    query_string: makeid(20)
  };

  reloadImage = event => {
    event.preventDefault();

    this.setState({
      query_string: makeid(20)
    });
  };

  render() {
    return (
      <div>
        <img
          key={this.state.query_string}
          src={`https://source.unsplash.com/random/200x200`}
        />
        <br />
        <a href="#reload-image" onClick={this.reloadImage}>
          Reload Image
        </a>
      </div>
    );
  }
}
