import React, { Component } from 'react'
import { render } from 'react-dom'
import Counter from  './Counter'
import Input from  './Input'
import Parent from './Parent';
import Demo from './Demo';

import Progress from './Progress';
import Counter2 from './Counter2';
import Radio from './Radio';
//render(<Counter initCount={10}></Counter>,document.getElementById("root"))
//render(<Input></Input>,document.getElementById("root"));
//render(<Parent/>,document.getElementById("root"));
//render(<Progress></Progress>,document.getElementById("root"));

render(<Radio></Radio>,document.getElementById("root"));