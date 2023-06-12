import { createContext, useReducer } from 'react';

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "SHOW":
            return action.payload;
        case "HIDE":
            return null;
        default:
            return state;
    }
}

const Context = createContext();

export const ContextProvider = (props) => {
    const [msg, msgDispatch] = useReducer(notificationReducer, null);

    return (
        <Context.Provider value={[msg, msgDispatch] }>
          {props.children}
        </Context.Provider>
      )
    }

export default Context;