import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 1) {
      onAddCategory((categories) => [...categories, inputValue]);
      setInputValue("");
    } else {
      console.log("Ingrese un valor");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search a gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
