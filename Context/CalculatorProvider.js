"use client";
import { useContext, useReducer } from "react";
import { CalculatorContext, CalculatorDispatchContext } from "./context";
import { CalculatorReducer } from "./CalculatorReducer";

const initialState = {
  resetDisplay: false,
  display: 0,
  history: [],
  storedNum: 0,
  operator: null,
};

const CalculatorProvider = ({ children }) => {
  const [calcState, dispatch] = useReducer(CalculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={calcState}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        {children}
      </CalculatorDispatchContext.Provider>
    </CalculatorContext.Provider>
  );
};

export function useCalculatorState() {
  return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
  return useContext(CalculatorDispatchContext);
}

export default CalculatorProvider;
