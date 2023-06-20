import React from "react";
import style from "./MemeForm.module.css";
import Button from "../ui/Button/Button";
import { CurrentMemeContext, RessourcesContext } from "../../App";
import { emptyMeme } from "orsys-tjs-meme";
//import { useState } from "react";
const MemeForm = (props) => {
  //const [meme, meme.set] = useState(meme);
  return (
    <CurrentMemeContext.Consumer>
  
    {(meme)=>(  <RessourcesContext.Consumer>
    {(ressources)=>{
      return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form onSubmit={evt=>{
        evt.preventDefault();
        // meme.set(meme)
      }}
      onReset={evt=>{meme.set(emptyMeme)}}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={meme.titre}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, titre: evt.target.value });
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image"
          value={meme.imageId}
          onChange={evt=>{meme.set({...meme,imageId:Number(evt.target.value)})}}
        >
          <option value="-1">No image</option>
          {
            ressources.images.map((img,position)=><option key={'option-'+position} value={img.id}>{img.titre}</option>
            )
          }
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
          value={meme.text}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, text: evt.target.value });
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
          value={meme.x}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, x: Number(evt.target.value) });
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
          value={meme.y}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, y:Number( evt.target.value )});
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
          value={meme.color}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, color: evt.target.value });
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
          value={meme.fontSize}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, fontSize:Number( evt.target.value) });
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
          value={meme.fontWeight}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, fontWeight: evt.target.value });
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={meme.underline}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, underline: evt.target.checked });
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
          checked={meme.italic}
          onChange={(evt) => {
            console.log(evt.target);
            meme.set({ ...meme, italic: evt.target.checked });
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
    </div>)}}
    </RessourcesContext.Consumer>
    )}
    </CurrentMemeContext.Consumer>
  );
};

export default MemeForm;
