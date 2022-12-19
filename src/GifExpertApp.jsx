import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball' ])
  const onAddCategory = () => {
    setCategories([...categories, 'HunterXHunter'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory = {setCategories} />
      {/*<button onClick={onAddCategory}>Agregar</button>*/}
      <ul>
          {categories.map( (categoria, index) => {
            return <li key={index}>{categoria}</li>
          })}
      </ul>
    </>
  );
};
