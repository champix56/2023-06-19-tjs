import React from "react";
import MemeSVGViewerStored from "../../components/ui/MemeSVGViewerStored/MemeSVGViewerStored";
import FlexH1Grow from "../../components/layout/FlexH1Grow/FlexH1Grow";
import MemeFormStored from "../../components/MemeForm/MemeFormStored";

const Editor = () => {
  return (
    <FlexH1Grow>
      <MemeSVGViewerStored basePath="" />
      <MemeFormStored />
    </FlexH1Grow>
  );
};

export default Editor;
