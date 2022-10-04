import { createSlice } from "@reduxjs/toolkit";

const popup = createSlice({
	name: 'popup',
	initialState: {
		popup: false
	},
	reducers: {
		setTogglePopup(state, action) {
			state.popup = action.payload
		}
	}
})

export const { setTogglePopup } = popup.actions
export default popup.reducer