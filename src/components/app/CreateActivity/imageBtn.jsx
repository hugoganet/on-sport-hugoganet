import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

function ImageBtn() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImagesURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImagesURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <h3> Ajouter une image</h3>
      <Input type="file" name="photo" multiple accept="image/*" onChange={onImageChange} />
      <Image.Group size="large">
        { imageURLs.map(imageSrc => <Image key={imageSrc} src={imageSrc} />) }
      </Image.Group>
    </>
  );
}

export default ImageBtn;
