import { configureStore } from "@reduxjs/toolkit"
import teamSlice from "../slices/teamSlice"

export const store = configureStore({
  reducer: {
    team: teamSlice,
  },
})
