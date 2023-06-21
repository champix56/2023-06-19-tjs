import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentReducer from "./currentSlice";
import ressourcesReducer, { fetchRessources } from "./ressourcesSlice";
const store = configureStore({
  reducer: combineReducers({
    current: currentReducer,
    ressources: ressourcesReducer,
  }),
  devTools: true,
});
export default store;
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchRessources());
