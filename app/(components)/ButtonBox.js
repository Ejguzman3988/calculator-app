import Button from "./Button";

const ButtonBox = () => {
  const numbers = [0, 3, 2, 1, 6, 5, 4, 9, 8, 7]
    .reverse()
    .map((num) => <Button content={num} />);

  return (
    <div className="border p-10 rounded-md grid grid-cols-3 gap-x-1 gap-y-4 reverse grid-flow-dense">
      {numbers}
    </div>
  );
};

export default ButtonBox;
