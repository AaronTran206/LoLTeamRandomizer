import { createSlice } from "@reduxjs/toolkit"

export interface summonerObject {
  id: string
  text: string
  icon: string
}

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    teamArr: [
      { id: "Summoner 1", text: "", icon: "" },
      { id: "Summoner 2", text: "", icon: "" },
      { id: "Summoner 3", text: "", icon: "" },
      { id: "Summoner 4", text: "", icon: "" },
      { id: "Summoner 5", text: "", icon: "" },
      { id: "Summoner 6", text: "", icon: "" },
      { id: "Summoner 7", text: "", icon: "" },
      { id: "Summoner 8", text: "", icon: "" },
      { id: "Summoner 9", text: "", icon: "" },
      { id: "Summoner 10", text: "", icon: "" },
    ],
  },
  reducers: {
    setTeamSlice: (state, action) => {
      state.teamArr = action.payload
    },
    setPlayerTextSlice: (state, action) => {
      //get object and index position of object
      const player = state.teamArr.find(
        (summoner) => summoner.id === action.payload.id
      )

      //update text of object
      player.text = action.payload.text
    },
  },
})

//export actions for slice
export const { setTeamSlice, setPlayerTextSlice } = teamSlice.actions

//selectors for slice
export const selectTeams = (state) => state.team.teamArr

export default teamSlice.reducer
