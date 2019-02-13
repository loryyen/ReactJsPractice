import React, { Component } from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import Input from './Input'
import Parent from './Parent';
import Demo from './Demo';

import Progress from './Progress';
import Counter2 from './Counter2';
import Radio from './Radio';
import Weather from './Weather';
import RouteExample from './RouteExample';
import ReactDom from 'react-dom'
import { createStore } from "redux";
import { Provider } from 'react-redux'
import Reducer from "./reducer";
import Memo from './Memo';
import App from './app';

// 建立一個 Redux store 來掌管你的應用程式的 state。
// 它的 API 是 { subscribe, dispatch, getState }。
const store = createStore(Reducer, window.devToolsExtension && window.devToolsExtension());

//render(<Counter initCount={10}></Counter>,document.getElementById("root"))
//render(<Input></Input>,document.getElementById("root"));
//render(<Parent/>,document.getElementById("root"));
//render(<Progress></Progress>,document.getElementById("root"));
//render(<Weather></Weather>, document.getElementById("root"));
// render(<RouteExample></RouteExample>,document.getElementById("root"));
const root = document.getElementById("root");
// ReactDom.render(
//     <Provider store={store}>
//         <Memo></Memo>
//     </Provider>,
//     root
// )

ReactDom.render(<App></App>, root)