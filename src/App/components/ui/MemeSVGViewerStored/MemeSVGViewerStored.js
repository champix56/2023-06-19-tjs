import { MemeSVGViewer } from "orsys-tjs-meme";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
const MemeSVGViewerStored = (props) => {
  const meme = useSelector((storeState) => storeState.meme);
  return (
    <MemeSVGViewer
      meme={meme}
      image={props.images.find((img) => img.id === meme.imageId)}
      basePath=""
    />
  );
};
MemeSVGViewerStored.propTypes = {
  images: PropTypes.array.isRequired,
};
export default MemeSVGViewerStored;
