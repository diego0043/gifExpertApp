import { GifGridItem } from "./GifGridItem";
import { useFechtGifs } from "../hooks/useFechtGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFechtGifs(category);

  return (
    <>
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
