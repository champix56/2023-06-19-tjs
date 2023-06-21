import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    memes:[],
    images:[]
}

const ressourcesSlice = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
  }
});

export const {update} = ressourcesSlice.actions

export default ressourcesSlice.reducer