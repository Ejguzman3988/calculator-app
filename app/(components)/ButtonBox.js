import Button from "./Button";

const ButtonBox = () => {
  const numbers = ["=", ".", 0, 3, 2, 1, 6, 5, 4, 9, 8, 7]
    .reverse()
    .map((num) => <Button content={num} buttonType={"num"} />);
  const operations = ["/", "x", "-", "+"].map((op) => <Button content={op} buttonType={"op"}/>);

  return (
    <div className="border p-11 rounded-md flex justify-center space-x-4">
      <div className="grid grid-cols-3 gap-x-4 gap-y-4 reverse grid-flow-dense">
        {numbers}
      </div>
      <div className="space-y-4">{operations}</div>
    </div>
  );
};

export default ButtonBox;
