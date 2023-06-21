import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR } from "../config/config";

const initialState = {
  memes: [],
  images: [],
};

const ressourcesSlice = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      "ressources/fetchRessources/fulfilled",
      (state, action) => {
        state.memes=action.payload.memes
        state.images=action.payload.images
      }
    );
  },
});

export const {} = ressourcesSlice.actions;
export const fetchRessources = createAsyncThunk(
  "ressources/fetchRessources",
  async () => {
    const pri = await fetch(`${REST_ADR}/images`);
    const prm = await fetch(`${REST_ADR}/memes`);
    const images = await pri.json();
    const memes = await prm.json();
    return { images: images, memes: memes };
  }
);
export default ressourcesSlice.reducer;
