import React, { Component } from "react";

export default class promotion extends Component {
  render() {
    const { open, toggle } = this.props;

    return (
      <div>
        <div onClick={toggle}>Promotions</div>
        {open && (
          <ul>
            <li>promotion1</li>
            <li>promotion2</li>
          </ul>
        )}
      </div>
    );
  }
}
