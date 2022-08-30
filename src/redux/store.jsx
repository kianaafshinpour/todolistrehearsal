import React from "react";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reduser from './reduser';

function AppProvider({children}){
    const globalState={
        toggled:false,
        list:[],
    }

    const store = createStore(reduser,globalState);
    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
}export default AppProvider;