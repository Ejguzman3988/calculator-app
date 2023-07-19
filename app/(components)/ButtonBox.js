import Button from "./Button";

const ButtonBox = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
    <Button content={num} />
  ));

  return (
    <div className="border p-10 rounded-md  grid grid-cols-4 gap-4">
      {numbers}
    </div>
  );
};

export default ButtonBox;
