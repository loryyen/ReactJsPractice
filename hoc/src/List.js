import React, { Component } from "react";

const List = ({ onSubmit }) => (
  <ul>
    <form onSubmit={onSubmit}>
      <button type="submit">Submit</button>
    </form>
    <li>123</li>
  </ul>
);

export default List;
