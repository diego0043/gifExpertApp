import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const imgs = await getGifs(category);
    setImages(imgs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {images.map(({ id, title, url }) => (
        <div key={id}>
          {title}
          <img src={url} alt={title} />
        </div>
      ))}
    </>
  );
};
