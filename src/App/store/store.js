import {configureStore,combineReducers} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import ressourcesReducer from './ressourcesSlice'
const store=configureStore({
    reducer:combineReducers({ressources:ressourcesReducer,current:currentReducer}),
    devTools:true
})
store.subscribe(()=>{
    store.getState()
})
export default store