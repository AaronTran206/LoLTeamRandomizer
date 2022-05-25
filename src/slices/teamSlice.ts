import { createSlice } from "@reduxjs/toolkit"

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    teamArr: [],
  },
  reducers: {
    setTeamSlice: (state, action) => {
      state.teamArr = action.payload
    },
  },
})

//export actions for slice
export const { setTeamSlice } = teamSlice.actions

//selectors for slice
export const selectTeams = (state) => state.team.teamArr

export default teamSlice.reducer