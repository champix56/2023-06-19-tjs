import { createSlice } from '@reduxjs/toolkit'
import {emptyMeme} from 'orsys-tjs-meme'
const initialState = {meme:emptyMeme}

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    update:(state,action)=>{
        state.meme=action.payload
    },
    clear:(state)=>{
        state.meme=emptyMeme
    }
  }
});

export const {update,clear} = currentSlice.actions

export default currentSlice.reducer