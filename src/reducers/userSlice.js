import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userDetails: null,
  geoLocationInfo: {
    latitude: 12.9351929,
    longitude: 77.62448069999999,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      console.log(action.payload, "dd");
      state.userDetails = action.payload;
    },
    setGeoLocationInfo(state, action) {
      state.geoLocationInfo = action.payload;
    },
  },
});
export const { setUserDetails, setGeoLocationInfo } = userSlice.actions;
export default userSlice.reducer;
