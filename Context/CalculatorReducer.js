export function CalculatorReducer(calcState, action) {
  switch (action.type) {
    case "BUTTON_CLICK":
      return {
        ...calcState,
        display: action.content
      }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
