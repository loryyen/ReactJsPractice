import { ADD, MINUS, ADD_ANY_NUM } from "./actions";

const intialState = {
    count: 1
};

export default function (state = intialState, action) {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case MINUS:
            return { count: state.count - 1 };
        case ADD_ANY_NUM:
            return {
                ...state,
                count: state.count + action.payload
            };
        default:
            return state;
    }
}