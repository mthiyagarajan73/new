import {createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN, UPDATEFCMTOKEN, WRITE_MOBILE_LOG} from '../../../redux/actions';
import {loginApi, UpdateFCMTokenApi} from '../../../routes/apiRoutes';
import type {loginReducerState,} from './Maintypes';
import {axiosInstance} from '../../../../utils/apiConfig';
import {Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';

export const loginMiddleWare = createAsyncThunk(
  LOGIN,
  async (
    {isLoading, error,data}: loginReducerState,
    {rejectWithValue},
  ) => {
    delete axiosInstance.defaults.headers.common['Authorization'];
    try {
      const {data} = await axiosInstance.post(loginApi, {
        isLoading,
        error,
      });
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  },
);
