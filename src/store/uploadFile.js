import { createSlice } from "@reduxjs/toolkit";

const uploadFile = createSlice({
	name: 'file',
	initialState: {
		file: '',
		status: null,
		error: null
	},
	reducers: {
		setFile(state, action) {
			state.file = action.payload
		}
	}
})

export const { setFile } = uploadFile.actions
export default uploadFile.reducer