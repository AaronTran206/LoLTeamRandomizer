import { configureStore } from "@reduxjs/toolkit"
import summonerNameSlice from "../slices/summonerNameSlice"

export const store = configureStore({
  reducer: {
    summonerName: summonerNameSlice,
  },
})
