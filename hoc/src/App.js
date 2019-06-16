import React from "react";
import logo from "./logo.svg";
import "./App.css";
//Example1
import Promotion from "./promotion";
import CreditCards from "./creditCards";
import withOpen from "./hoc/withOpen";
//Example2
import List from "./List";
import withNames from "./hoc/withNames";
import withTodo from "./hoc/withTodo";

//Example1
const WithOpenPromotion = withOpen(Promotion);
const WithOpenCreditCards = withOpen(CreditCards);

//Example2
const NameList = withNames(List);
const TodoList = withTodo(List);

function App() {
  return (
    <div className="App">
      <WithOpenPromotion> </WithOpenPromotion>
      <WithOpenCreditCards> </WithOpenCreditCards>
      <NameList />
      <TodoList />
    </div>
  );
}

export default App;
