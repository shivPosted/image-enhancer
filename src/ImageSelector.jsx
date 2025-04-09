import { useState } from "react";
import useImage from "./useImage";

function ImageSelector({ setFormdata, setUploadedImage }) {
  function handleFileChange(e) {
    const image = e.target.files[0];
    if (!image) return null;
    const imageUrl = URL.createObjectURL(image);
    setUploadedImage(imageUrl);
    const form = new FormData();
    form.append("image_file", image);
    setFormdata(form);
  }

  return (
    <label className="image-selector">
      <div>click and drag to upload your image</div>
      <input id="file-input" type="file" onChange={handleFileChange} />
    </label>
  );
}
export default ImageSelector;
