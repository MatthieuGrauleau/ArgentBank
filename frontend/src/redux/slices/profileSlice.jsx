import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'User',
  initialState: {
    email: null,
    firstName: null,
    lastName: null,
    userName: null,
  },
  reducers: {
    userProfile: (state, action) => {
      (state.email = action.payload.email),
        (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName),
        (state.userName = action.payload.userName);
    },
    editUserName: (state, action) => {
      state.userName = action.payload;
    },
    resetData: (state) => {
      for (const key in state) {
        state[key] = null;
      }
    },
  },
});

export const { userProfile, editUserName, resetData } = profileSlice.actions;

export default profileSlice.reducer;
