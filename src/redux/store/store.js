import { createStore } from "redux";
import musicReducer from "../reducers/musicReducer";

const store = createStore(musicReducer);

export default store;
