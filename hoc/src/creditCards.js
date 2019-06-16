import React, { Component } from "react";

export default class creditCards extends Component {
  render() {
    const { open, toggle } = this.props;

    return (
      <div>
        <div onClick={toggle}>Credit Cards</div>
        {open && (
          <ul style={{ color: "red" }}>
            <li>credit card1</li>
            <li>credit card2</li>
          </ul>
        )}
      </div>
    );
  }
}
