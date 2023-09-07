import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../BottomTab/loginSlice'

export default configureStore({
  reducer: {
    login:loginReducer
  }
})