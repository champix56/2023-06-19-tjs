import { MemeSVGThumbnail } from "orsys-tjs-meme";
import React from "react";
import { useSelector } from "react-redux";
const MemeSVGThumbnailStored = () => {
  const ressources = useSelector((storeState) => storeState.ressources);
  return <MemeSVGThumbnail {...ressources} basePath="" />;
};

export default MemeSVGThumbnailStored;
