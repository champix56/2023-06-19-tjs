import React from "react";
import style from "./MemeForm.module.css";
import Button from "../ui/Button/Button";
import { useState } from "react";
const MemeForm = (props) => {
  const [formValues, setformValues] = useState(props.meme);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={formValues.titre}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, titre: evt.target.value });
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="-1">No image</option>
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
          value={formValues.text}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, text: evt.target.value });
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
          value={formValues.x}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, x: evt.target.value });
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
          value={formValues.y}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, y: evt.target.value });
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
          value={formValues.color}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, color: evt.target.value });
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
          value={formValues.fontSize}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, fontSize: evt.target.value });
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
          value={formValues.fontWeight}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, fontWeight: evt.target.value });
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={formValues.underline}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, underline: evt.target.checked });
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
          checked={formValues.italic}
          onChange={(evt) => {
            console.log(evt.target);
            setformValues({ ...formValues, italic: evt.target.checked });
          }}
        />
        &nbsp;
        <label htmlFor="italic">
          <h2>italic</h2>
        </label>
        <hr />
        <Button type="reset">Annul</Button>
        <Button type="submit">Annul</Button>
        <br />
      </form>
    </div>
  );
};

export default MemeForm;
