import { configureStore } from "@reduxjs/toolkit"
import summonerNameSlice from "../slices/summonerNameSlice"
import teamSlice from "../slices/teamSlice"

export const store = configureStore({
  reducer: {
    summonerName: summonerNameSlice,
    team: teamSlice,
  },
})
