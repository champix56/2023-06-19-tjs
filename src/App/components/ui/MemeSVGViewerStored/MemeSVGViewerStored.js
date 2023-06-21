import React from "react";
import { MemeSVGViewer } from "orsys-tjs-meme";
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types'
const MemeSVGViewerStored = (props) => {
  const meme = useSelector((s) => s.current.meme);
  const images = useSelector((s) => s.ressources.images);
  return (
    <MemeSVGViewer
      {...props}
      meme={meme}
      image={images.find((img) => img.id === meme.imageId)}
    />
  );
};
MemeSVGViewerStored.propTypes={
    basePath: PropTypes.string.isRequired
}
export default MemeSVGViewerStored;
