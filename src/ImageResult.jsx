import useImage from "./useImage";

function ImageResult({ uploadedImage, isLoading, processedImage, error }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "3.2rem",
      }}
    >
      <figure
        style={{
          width: "20rem",
          height: "25rem",
          position: "relative",
          borderRadius: "11px",
          overflow: "hidden",
        }}
      >
        <img
          src={uploadedImage}
          style={{
            width: "100%",
          }}
          alt=""
        />
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "0",
            right: "0",
            backgroundColor: "gray",
            textAlign: "center",
            paddingBlock: "0.5rem",
          }}
        >
          Original Image
        </div>
      </figure>
      <figure
        style={{
          width: "20rem",
          height: "25rem",
          position: "relative",
          borderRadius: "11px",
          overflow: "hidden",
        }}
      >
        {error ? (
          <div
            style={{
              paddingTop: "50%",
              color: "red",
              textAlign: "center",
            }}
          >
            {" "}
            {error}{" "}
          </div>
        ) : (
          ""
        )}
        {isLoading ? (
          <div>loading</div>
        ) : (
          <img src={processedImage} style={{ width: "100%" }} alt="" />
        )}

        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "0",
            right: "0",
            backgroundColor: "gold",
            textAlign: "center",
            paddingBlock: "0.5rem",
          }}
        >
          Enahced Image
        </div>
      </figure>
    </div>
  );
}
export default ImageResult;
