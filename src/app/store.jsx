import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/CounterSlice'
import loginReducer from '../slice/LoginSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
})