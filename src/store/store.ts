import { configureStore } from "@reduxjs/toolkit"
import gamemodeSlice from "../slices/gamemodeSlice"
import teamSlice from "../slices/teamSlice"

export const store = configureStore({
  reducer: {
    team: teamSlice,
    gamemode: gamemodeSlice,
  },
})
