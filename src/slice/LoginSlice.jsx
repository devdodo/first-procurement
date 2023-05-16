import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLogin } = loginSlice.actions

export default loginSlice.reducer