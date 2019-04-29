import React from "react";

class Offline extends React.Component {
  static defaultProps = {
    render: null,
    onChange: () => {}
  };

  state = {
    isOffline: !window.navigator.onLine,
    isOnline: window.navigator.onLine
  };

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  handleOnline = () => {
    this.handleEvent(false);
  };

  handleOffline = () => {
    this.handleEvent(true);
  };

  handleEvent = (isOffline = true) => {
    const isOnline = !isOffline;

    this.props.onChange({ isOffline, isOnline });
    this.setState({ isOffline, isOnline });
  };

  render() {
    const { children, render } = this.props;

    if (render) {
      return render(this.state);
    }

    if (children) {
      if (typeof children === "function") {
        return children(this.state);
      }

      return React.Children.only(children)(this.state);
    }

    return null;
  }
}

export default class Network extends React.Component {
  render() {
    return (
      <div>
        <Offline>
          {({ isOffline, isOnline }) => {
            return isOffline ? (
              <div>{"I am offline ❌"}</div>
            ) : (
              <div>{"I am online ✅"}</div>
            );
          }}
        </Offline>
      </div>
    );
  }
}
