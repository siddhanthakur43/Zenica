import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'isSideBar',
    initialState: {
        isSideBar: false
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBar = !state.isSideBar;
        },
    },
});

export const { toggleSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;