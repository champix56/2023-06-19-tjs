import React from "react";
import MemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { save, update } from "../../store/currentSlice";
const MemeFormStored = (props) => {
  const storeDispatch = useDispatch();
  const images=useSelector(storeState=>storeState.ressources.images)
    const meme=useSelector(storeState=>storeState.current.meme)
  /*const datas = useSelector((s) => ({
    images: s.ressources.images,
    meme: s.current.meme,
  }));*/
  return (
    <MemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(meme) => {
        storeDispatch(update(meme));
      }}
      onMemeSubmit={(meme) => {
        storeDispatch(save(meme));
      }}
    />
  );
};

export default MemeFormStored;
