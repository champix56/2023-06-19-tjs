import React from "react";
import style from "./MemeForm.module.css";
import Button from "../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { saveMeme, update } from "../../store/currentSlice";
//import { useState } from "react";
const MemeForm = (props) => {
  //const [props.meme, props.onMemeChange] = useState(props.meme);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form onSubmit={evt=>{
        evt.preventDefault();
        props.onMemeSubmit(props.meme)
      }}>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={props.meme.titre}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image"
          value={props.meme.imageId}
          onChange={evt=>{props.onMemeChange({...props.meme,imageId:Number(evt.target.value)})}}
        >
          <option value="-1">No image</option>
          {props.images.map((img,i)=><option key={'option-'+i} value={img.id}>{img.titre}</option>)}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <br />
        <label htmlFor="x">
          <h2>x :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, x: Number(evt.target.value) });
          }}
        />
        <label htmlFor="y">
          <h2>y :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, y:Number( evt.target.value )});
          }}
        />
        <hr />
        <br />
        <h3>Decorations</h3>
        <label htmlFor="color">
          <h2>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.meme.color}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <br />
        <label htmlFor="fontSize">
          <h2>font-size :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, fontSize:Number( evt.target.value) });
          }}
        />
        <br />
        <label htmlFor="fontWeight">
          <h2>font-weight :</h2>
        </label>
        <input
          className={style.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, fontWeight: evt.target.value });
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={props.meme.underline}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, underline: evt.target.checked });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2>underline</h2>
        </label>
        <br />
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={props.meme.italic}
          onChange={(evt) => {
            console.log(evt.target);
            props.onMemeChange({ ...props.meme, italic: evt.target.checked });
          }}
        />
        &nbsp;
        <label htmlFor="italic">
          <h2>italic</h2>
        </label>
        <hr />
        <Button type="reset" bgcolor="tomato">Annul</Button>
        <Button type="submit">ok</Button>
        <br />
      </form>
    </div>
  );
};
export const MemeFormStored=(props)=>{
  const dispatch=useDispatch()
  const currentMeme=useSelector(storeState=>storeState.current.meme)
  const images=useSelector(storeState=>storeState.ressources.images)
 return <MemeForm {...props} images={images} meme={currentMeme} onMemeChange={(meme)=>dispatch(update(meme))} onMemeSubmit={meme=>dispatch(saveMeme(meme))}/>
}
export default MemeForm;
