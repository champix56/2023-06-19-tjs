import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  memes: [],
};

const ressourcesSlice = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase('ressources/initialFetch/fulfilled',(state,action)=>{
        console.log(state,action)
        state.images=action.payload.images;
        state.memes=action.payload.memes;
    })
    builder.addCase('current/save/fulfilled',(state,action)=>{
        console.log(state,action)
        const position=state.memes.findIndex(m=>m.id===action.payload.id)
        if(position===-1){
            state.memes.push(action.payload)
        }
        else {
            state.meme[position]=action.payload
        }
    })
  }
});

// export const {} = ressourcesSlice.actions;

export const initialRessourcesFetch=createAsyncThunk('ressources/initialFetch',async()=>{
   const pri =await fetch('http://localhost:5679/images')
   const prm =await fetch('http://localhost:5679/memes')
   const imgs=await pri.json()
   const memes=await prm.json()
   return {memes:memes,images:imgs}

})

export default ressourcesSlice.reducer;
