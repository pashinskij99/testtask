import { createSlice } from '@reduxjs/toolkit';

const radio = createSlice({
	name: 'radio',
	initialState: {
		radio: 1,
		status: null,
		error: null,
	},
	reducers: {
		changeRadioId(state, action){
			state.radio = action.payload
		},
	},
})

export const { changeRadioId } = radio.actions
export default radio.reducer