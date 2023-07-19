export function CalculatorReducer(calcState, action) {
  switch (action.type) {
    case "NUMBER_CLICK":
      let display = calcState.display.toString();

      if (action.content === "." && !display.includes(".")) {
        display += action.content;
        return {
          ...calcState,
          display,
        };
      }
      if (action.content === "=") {
        if (calcState.operator) {
          const equals = eval(
            calcState.storedNum + calcState.operator + display
          );
          console.log(equals);
          return {
            ...calcState,
            display: equals,
            operator: null,
            storedNum: equals,
            history: [...calcState.history, equals],
          };
        }
      }
      if (calcState.resetDisplay) {
        display = action.content.toString();
      } else {
        display === "0"
          ? (display = action.content.toString())
          : (display += action.content.toString());
      }

      return {
        ...calcState,
        display,
      };
    case "OPERATION_CLICK":
      return {
        ...calcState,
        storedNum: calcState.display,
        operator: action.content,
        resetDisplay: true,
      };
    case "BUTTON_CLICK":
      return {
        ...calcState,
        display: action.content,
      };

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
