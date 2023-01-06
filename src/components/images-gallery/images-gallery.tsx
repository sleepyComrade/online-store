import { useState } from "react";

type ImageItemProps = {
  src: string;
  onPreviewClick: (src: string) => void;
}

function ImageItem({ src, onPreviewClick }: ImageItemProps) {
  return (
    <div className="image-item__wrapper">
      <img className="image-item__image" src={src} onClick={() => onPreviewClick(src)} />
    </div>
  );
}

type ImagesGalleryProps = {
  images: Array<string>;
}

export default function ImagesGallery({ images}: ImagesGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const onPreviewClick = (image: string) => {setSelectedImage(image)}

  return (
    <div className="image-gallery__wrapper">
      <div className="image-gallery__previews">
        {images.map((src) => <ImageItem key={src} src={src} onPreviewClick={onPreviewClick} />)}
      </div>
      <div className="image-gallery__big-image-wrapper">
        <img className="image-gallery__big-image" src={selectedImage} />
      </div>
    </div>
  )
}