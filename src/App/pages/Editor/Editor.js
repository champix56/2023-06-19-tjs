import React, { useEffect } from "react";
import MemeSVGViewerStored from "../../components/ui/MemeSVGViewerStored/MemeSVGViewerStored";
import FlexH1Grow from "../../components/layout/FlexH1Grow/FlexH1Grow";
import MemeFormStored from "../../components/MemeForm/MemeFormStored";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear, update } from "../../store/currentSlice";
//import { current } from "@reduxjs/toolkit";

const Editor = () => {
  const d = useDispatch();
  const memes = useSelector((s) => s.ressources.memes);
  const params = useParams();
  useEffect(() => {
    if (undefined !== params.id) {
      const currentSelectedMeme = memes.find((m) => m.id === Number(params.id));
      if (currentSelectedMeme !== undefined) {
        d(update(currentSelectedMeme));
      }
    } else {
      d(clear());
    }
    return () => {
      d(clear());
    };
  }, [params, d, memes]);
  return (
    <FlexH1Grow>
      <MemeSVGViewerStored basePath="" />
      <MemeFormStored />
    </FlexH1Grow>
  );
};

export default Editor;
