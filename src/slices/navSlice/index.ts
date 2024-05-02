import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null, // Corrected typo
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

export const selectOrigin = (state: {navigation: {origin: any}}) =>
  state.navigation?.origin;
export const selectDestination = (state: {navigation: {destination: any}}) =>
  state.navigation?.destination;
export const selectTravelTimeInformation = (state: {
  navigation: {travelTimeInformation: any};
}) => state.navigation?.travelTimeInformation;

export default navSlice.reducer;
