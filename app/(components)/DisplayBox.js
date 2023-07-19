import { useCalculatorState } from "@/Context/CalculatorProvider";

const DisplayBox = () => {
  const { display, operator } = useCalculatorState();
  return (
    <div className="border rounded-md w-[80vw] p-10 flex justify-between">
      <div className="justify-self-start text-lg bolder">
        {operator ? operator : ""}
      </div>
      <div>{display}</div>
    </div>
  );
};

export default DisplayBox;
