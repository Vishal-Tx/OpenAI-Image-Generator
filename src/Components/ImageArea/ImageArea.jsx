import React from "react";

const ImageArea = ({ image, error }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      {error ? <div>{error}</div> : <img src={image} />}
    </div>
  );
};

export default ImageArea;
