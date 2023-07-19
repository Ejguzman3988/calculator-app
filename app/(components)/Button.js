import { useCalculatorDispatch } from "@/Context/CalculatorProvider";

const Button = ({ content, buttonType }) => {
  const dispatch = useCalculatorDispatch();
  let dispatchType;
  switch (buttonType) {
    case "num":
      dispatchType = "NUMBER_CLICK";
      break;
    case "op":
      dispatchType = "OPERATION_CLICK";
      break;
    default:
      dispatchType = "BUTTON_CLICK";
      break;
  }

  return (
    <div
      type="button"
      onClick={() => dispatch({ type: dispatchType, content })}
      className="border rounded-lg px-10 py-2 w-36 text-center cursor-pointer"
    >
      {content}
    </div>
  );
};

export default Button;
