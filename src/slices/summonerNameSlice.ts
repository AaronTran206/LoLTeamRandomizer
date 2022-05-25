import { createSlice } from "@reduxjs/toolkit"

export const summonerNameSlice = createSlice({
  name: "summonerName",
  initialState: {
    name: null,
    id: null,
  },
  reducers: {
    setSummonerName: (state, action) => {
      state.name = action.payload
    },
    setSummonerId: (state, action) => {
      state.id = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSummonerName, setSummonerId } = summonerNameSlice.actions

//Selectors
export const selectSummonerName = (state) => state.summonerName.name
export const selectSummonerId = (state) => state.summonerName.id

export default summonerNameSlice.reducer
