import { useState } from "react";
import ImageResult from "./ImageResult";
import ImageSelector from "./ImageSelector";
import Logo from "./Logo";
import useImage from "./useImage";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [formData, setFormdata] = useState(null);
  const { isLoading, error, image } = useImage(formData);

  return (
    <main
      style={{
        maxWidth: "60%",
        margin: "2.4rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "2.4rem",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <Logo />
      <ImageSelector
        setFormdata={setFormdata}
        setUploadedImage={setUploadedImage}
      />
      {uploadedImage ? (
        <ImageResult
          uploadedImage={uploadedImage}
          isLoading={isLoading}
          processedImage={image}
          error={error}
        />
      ) : (
        ""
      )}
    </main>
  );
}
export default App;
