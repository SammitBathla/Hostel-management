import { createContext, useRef } from "react";
import { useState } from "react";

export const Context = createContext()

const AppContext = ({children}) => {
  
    const scrollToRefs = {
        ref1: useRef(),
        ref2: useRef(),
        ref3: useRef(),
        ref4: useRef(),
        ref5: useRef(),
        ref6: useRef(),
        ref7: useRef(),
    };
    const handleClick = (refId) => {
        const scrollToPosition = scrollToRefs[refId].current.offsetTop;
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      };

    return (
        <Context.Provider
        value={{
            scrollToRefs,
            handleClick
        }}
        >{children} </Context.Provider>
  )
}

export default AppContext