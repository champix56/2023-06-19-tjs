import {configureStore,combineReducers} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import ressourcesReducer, { initialRessourcesFetch } from './ressourcesSlice'
const store=configureStore({
    reducer:combineReducers({ressources:ressourcesReducer,current:currentReducer}),
    devTools:true
})
store.subscribe(()=>{
    store.getState()
})
store.dispatch(initialRessourcesFetch())
export default store