import { useCalculatorState } from "@/Context/CalculatorProvider";

const DisplayBox = () => {
  const { display, operation } = useCalculatorState();
  return (
    <div className="border rounded-md w-[80vw] p-10 flex justify-between">
      <div className="justify-self-start text-lg bolder">
        {operation ? operation : ""}
      </div>
      <div>{display}</div>
    </div>
  );
};

export default DisplayBox;
