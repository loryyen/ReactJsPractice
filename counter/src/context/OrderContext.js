import { createContext } from 'react';

export const { Provider, Consumer } = createContext({
    orders: [],
    addOrder: () => { }
});

// export default context;