// setup data layer

import { createContext, useReducer,useContext } from "react";
import React from 'react';
//we need this to track basket

//this is data layer
export const StateContext=createContext();

//build a provider 
export  const StateProvider=({Reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(Reducer,initialState)} >{children}</StateContext.Provider>
);
//this is how we use it inside of component
export const useStateValue=()=>useContext(StateContext);        


export default StateProvider;

    
    