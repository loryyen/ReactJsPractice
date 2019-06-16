import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    onSubmit = e => {
      e.preventDefault();
      alert("123");
    };
    return (
      <div>
        <ul>
          <li />
        </ul>
      </div>
    );
  }
}
