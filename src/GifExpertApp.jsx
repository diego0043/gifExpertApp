import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    } else {
      Swal.fire({
        title: "Esta categoria ya existe",
        icon: "info",
        background: "#fff",

        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={onAddCategory} />
      {/*<button onClick={onAddCategory}>Agregar</button>*/}
      <div>
        {categories.map((categoria) => (
          <GifGrid key={categoria} category={categoria} />
        ))}
      </div>
    </>
  );
};
