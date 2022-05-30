import { createSlice } from "@reduxjs/toolkit"

export interface gamemodeObj {
  id: number
  name: string
  rules: string
}

export const gamemodeSlice = createSlice({
  name: "gamemode",
  initialState: {
    mode: {
      id: 1,
      name: `Classic`,
      rules: `Summoner's Rift 5v5. Leave it all out there on the field!`,
    },
  },
  reducers: {
    setGamemodeSlice: (state, action) => {
      state.mode = action.payload
    },
  },
})

//export actions for slice
export const { setGamemodeSlice } = gamemodeSlice.actions

//selectors for slice
export const selectGamemod = (state) => state.gamemode.mode

export default gamemodeSlice.reducer
