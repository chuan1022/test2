import React, { Component } from "react";

class Button extends Component {

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
