import { useEffect, useState } from "react";

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
  const [imgs, setImgs] = useState<Array<Blob>>([]);

  const [selectedImage, setSelectedImage] = useState(images[0]); 
  const onPreviewClick = (image: string) => {setSelectedImage(image)}
  useEffect(() => {
    Promise.allSettled(images.map(src => fetch(src).then(res => res.blob()))).then(res => {
      const fulfilled = res.filter(it => it.status == "fulfilled") as Array<PromiseFulfilledResult<Blob>>;
      const values = fulfilled.map(it => it.value).sort((a, b) => a.size - b.size);
      const filtered = values.filter((it, index, arr) => it.size !== arr[index + 1]?.size);
      setImgs(filtered);
    });
  }, []);

  return (
    <div className="image-gallery__wrapper">
      <div className="image-gallery__previews">
        {imgs.map(img => <ImageItem key={img.size} src={URL.createObjectURL(img)} onPreviewClick={onPreviewClick} />)}
      </div>
      <div className="image-gallery__big-image-wrapper">
        <img className="image-gallery__big-image" src={selectedImage} />
      </div>
    </div>
  )
}