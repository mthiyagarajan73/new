import {createSlice} from '@reduxjs/toolkit';
import {loginMiddleWare} from './MainMiddleware';
import type {Login, loginReducerState} from './Maintypes';


const loginInitialState: loginReducerState = {
  isLoading: false,
  error: '',
  data: {
    Username: 0,
    Password: 0,
  },
};

const loginReducer = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginMiddleWare.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(
      loginMiddleWare.fulfilled,
      (state, {payload}: {payload: Login}) => {
        state.isLoading = false;
        state.data = payload;
      },
    );
    builder.addCase(loginMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export const loginReducers = loginReducer.reducer;
