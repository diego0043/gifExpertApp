import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 1) {
      onNewValue(inputValue);
      setInputValue("");
    } else {

      Swal.fire({
        title: 'Debes escribir una categoria',
        icon: 'info',
        background: '#fff',
        confirmButtonText: 'Aceptar'

      })
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input 
        className="input"
        type="text"
        placeholder="Search a gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
