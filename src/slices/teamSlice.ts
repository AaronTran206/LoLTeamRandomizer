import { createSlice } from "@reduxjs/toolkit"

export interface summonerObject {
  id: string
  text: string
  perk: {
    name: string
    rules: string
  }
}

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    teamArr: [
      { id: "Summoner 1", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 2", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 3", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 4", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 5", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 6", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 7", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 8", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 9", text: "", perk: { name: "", rules: "" } },
      { id: "Summoner 10", text: "", perk: { name: "", rules: "" } },
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
    setPlayerPerkSlice: (state, action) => {
      //get object and index position of object
      const player = state.teamArr.find(
        (summoner) => summoner.id === action.payload.id
      )

      //update text of object
      player.perk.name = action.payload.perkName
      player.perk.rules = action.payload.perkRules
    },
  },
})

//export actions for slice
export const { setTeamSlice, setPlayerTextSlice, setPlayerPerkSlice } =
  teamSlice.actions

//selectors for slice
export const selectTeams = (state) => state.team.teamArr

export default teamSlice.reducer
