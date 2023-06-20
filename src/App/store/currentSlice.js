import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
  },
  extraReducers:(builder)=>{
    builder.addCase('current/save/fulfilled',(state,action)=>{
        state.meme=action.payload
    })
  }
});

export const {update,clear} = currentSlice.actions
export const saveMeme=createAsyncThunk('current/save',async(meme)=>{
    const pr=await fetch(`http://localhost:5679/memes${meme.id!==undefined?'/'+meme.id:''}`,{
        method:meme.id!==undefined?'PUT':'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(meme)
    });
    return await pr.json()
})
export default currentSlice.reducer