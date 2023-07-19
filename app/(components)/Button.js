import { useCalculatorDispatch } from "@/Context/CalculatorProvider";
const Button = ({ content }) => {
  const dispatch = useCalculatorDispatch();
  return (
    <div
      onClick={() => dispatch({ type: "BUTTON_CLICK", content })}
      className="border rounded-lg px-10 py-2 w-36 text-center"
    >
      {content}
    </div>
  );
};

export default Button;
