import { useCalculatorState } from "@/Context/CalculatorProvider";

const DisplayBox = () => {
  const { display } = useCalculatorState();
  return (
    <div className="border rounded-md w-[80vw] p-10 text-right">{display}</div>
  );
};

export default DisplayBox;
