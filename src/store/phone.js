import { createSlice } from "@reduxjs/toolkit"

const phone = createSlice({
	name: 'phone',
	initialState: {
		phone: 0,
		status: null,
		error: null,
	},
	reducers: {
		setPhone(state, action) {
			state.phone = action.payload
		}
	}
})

export const { setPhone } = phone.actions
export default phone.reducer
