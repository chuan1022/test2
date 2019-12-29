import React, { Component } from "react";

class Button extends Component {

  static defatultProps = {
    size: 20,
    color: "#333"
  };

  render() {
    const { color, children, size } = this.props;
    return (
      <button
        style={{
          color: color,
          fontSize: size
        }}
      >
        {children}
      </button>
    );
  }
}

export default Button;
