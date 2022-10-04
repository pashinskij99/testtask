import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPositions = createAsyncThunk(
	'positions/fetchPositions',
	async function() {
		const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
		
		const data = await response.json()

		return data
	}
)

const positionsSlice = createSlice({
	name: 'positions',
	initialState: {
		positions: [],
		status: null,
		error: null
	},
	extraReducers: {
		[fetchPositions.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchPositions.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.positions = action.payload
		},
		[fetchPositions.rejected]: (state, action) => {},
	}
})

export default positionsSlice.reducer