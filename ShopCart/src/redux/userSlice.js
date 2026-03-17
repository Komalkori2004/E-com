import { createSlice } from "@reduxjs/toolkit";
const  getUSer=()=>{
  const data=localStorage.getItem("user")
  return data?JSON.parse(data):null
}
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUSer()
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      localStorage.setItem("user",JSON.stringify(action.payload))
    },

    logout: (state) => {
      state.user = null
      localStorage.removeItem("user")
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer