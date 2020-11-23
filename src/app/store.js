import { configureStore } from "@reduxjs/toolkit";
import personsReducer from "../features/persons/personsSlice";

export default configureStore({
  reducer: {
    persons: personsReducer,
  },
});
