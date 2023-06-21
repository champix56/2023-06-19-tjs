import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";
import { REST_ADR } from "../config/config";

const initialState = {
  meme: emptyMeme,
};

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    update(state, action) {
      state.meme = action.payload;
    },
    clear(state) {
      state.meme = emptyMeme;
    },
  },
})

export const { update, clear } = currentSlice.actions;
export const save = createAsyncThunk("current/save", async (meme) => {
  const prm = await fetch(
    `${REST_ADR}/memes${undefined !== meme.id ? "/" + meme.id : ""}`,
    {
        headers:{"Content-Type":"application/json"},
        method: undefined !== meme.id ? 'PUT' : 'POST',
        body:JSON.stringify(meme)
    }
  )
  return await prm.json()
});
export default currentSlice.reducer;
