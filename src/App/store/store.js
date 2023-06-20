import {configureStore,combineReducers} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
const store=configureStore({
    reducer:currentReducer,
    devTools:true
})
store.subscribe(()=>{
    store.getState()
})
export default store