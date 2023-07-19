export function CalculatorReducer(calcState, action) {
  switch (action.type) {
    case "NUMBER_CLICK":
      let display = calcState.display.toString();
      let diffContent = new Set(["=", "."]);
      if (!diffContent.has(action.content)) {
        display === "0"
          ? (display = action.content.toString())
          : (display += action.content.toString());
      } else if (action.content === "." && !display.includes(".")) {
        display += action.content;
      }

      return {
        ...calcState,
        display,
      };
    case "OPERATION_CLICK":
      return {
        ...calcState,
        operation: action.content
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
