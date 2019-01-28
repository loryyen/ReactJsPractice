export const ADD = "add";
export const MINUS = "minus";
export const ADD_ANY_NUM = "ADD_ANY_NUM";

export const add = () => ({ type: ADD });
export const minus = () => ({ type: MINUS });
export const addAnyNum = (num) => ({ type: ADD_ANY_NUM, payload: num});