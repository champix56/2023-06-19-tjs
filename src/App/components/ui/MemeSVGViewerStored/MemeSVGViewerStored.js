import { MemeSVGViewer } from "orsys-tjs-meme";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const MemeSVGViewerStored = () => {
  const meme = useSelector((storeState) => storeState.current.meme);
  const images = useSelector((storeState) => storeState.ressources.images);
  return (
    <MemeSVGViewer
      meme={meme}
      image={images.find((img) => img.id === meme.imageId)}
      basePath=""
    />
  );
};

export default MemeSVGViewerStored;
