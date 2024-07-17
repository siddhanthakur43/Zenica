import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './features/sidebarSlice';

const store = configureStore({
    reducer: {
        sideBar: sidebarReducer, 
    },
});

export default store;

