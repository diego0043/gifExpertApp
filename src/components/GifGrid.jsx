import { GifGridItem } from "./GifGridItem";
import { useFechtGifs } from "../hooks/useFechtGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFechtGifs(category);

  return (
    <>
      {
        isLoading ? <h2>Cargando...</h2> : null
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
