import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async function(num_page = 1, { dispatch }) {
		const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${num_page}&count=6`)

		const {users, total_pages, page} = await response.json()

		dispatch(changePage(page))
		dispatch(changeTotalPages(total_pages))

		return users
	}
)

export const addUsers = createAsyncThunk(
	'users/addUsers',
	async function(formUser, {rejectWithValue, dispatch}) {
		try {
			const tokenFetch = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')

			const token = await tokenFetch.json()

			const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
				method: 'POST',
				headers: {
					'Token': token.token,
				},
				body: formUser
			})

			if(response.status === 422) throw new Error('Error, please check your fields')
			
			if(response.status === 409) throw new Error('Error, user with this data already exist')
			
			if(!response.ok) throw new Error('Can\'t add new users!')
			

			const { user_id } = await response.json()

			const responseNewUser = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${user_id}`)

			const { user } = await responseNewUser.json()

			dispatch(addUser(user))
			dispatch(fetchUsers())


		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const users = createSlice({
	name: 'users',
	initialState: { 
		users: [],
		status: null,
		error: null,
		page: 1,
		total_pages: 1, 
	},
	reducers: {
		addUser(state, action) {
			state.users.push(action.payload)
		},
		changePage(state, action) {
			state.page = action.payload
		},
		changeTotalPages(state, action) {
			state.total_pages = action.payload
		}
	},
	extraReducers: {
		[fetchUsers.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.users = action.payload
		},
		[fetchUsers.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
			// state.users = []
		},
		[addUsers.pending]: (state) => {
			state.status = 'loading_response'
			state.error = null
		},
		[addUsers.fulfilled]: (state, action) => {
			state.status = 'resolved_user'
			state.users = action.payload
		},
		[addUsers.rejected]: (state, action) => {
			state.status = 'rejected_user'
			state.error = action.payload
			// state.users = []
		},
	}
})

const { addUser, changePage, changeTotalPages } = users.actions
export default users.reducer
  
