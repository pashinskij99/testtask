import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users';
import positionsReducer from './positions';
import radioReducer from './radio';
import phoneReducer from './phone';
import fileReducer from './uploadFile';
import popupReducer from './popup';

export default configureStore({
  reducer: {
    users: usersReducer,
    positions: positionsReducer,
    radio: radioReducer,
    phone: phoneReducer,
    file: fileReducer,
    popup: popupReducer,
  }
})



