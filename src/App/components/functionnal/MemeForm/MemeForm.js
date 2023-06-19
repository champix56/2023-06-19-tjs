import React from "react";
import style from "./MemeForm.module.css";
import Button from "../../ui/Button/Button";
const MemeForm = (props) => {
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" />
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
        <input name="text" id="text" type="text" />
        <br />
        <label htmlFor="x">
          <h2>x :</h2>
        </label>
        <input className={style.smallNumber} name="x" id="x" type="number" />
        <label htmlFor="y">
          <h2>y :</h2>
        </label>
        <input className={style.smallNumber} name="y" id="y" type="number" />
        <hr />
        <br />
        <h3>Decorations</h3>
        <label htmlFor="color">
          <h2>color :</h2>
        </label>
        <input name="color" id="color" type="color" />
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
        />
        <br />
        <input name="underline" id="underline" type="checkbox" />
        &nbsp;
        <label htmlFor="underline">
          <h2>underline</h2>
        </label>
        &nbsp;
        <h2>/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" />
        <hr />
        <Button type="reset">Annul</Button>
        <Button type="submit">Annul</Button>
        <br />
      </form>
    </div>
  );
};

export default MemeForm;
