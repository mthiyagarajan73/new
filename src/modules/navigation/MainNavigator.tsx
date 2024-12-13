import React, {createContext, useMemo} from 'react';
import MainScreen from '../Dashboard/MainScreen';
import ProductView from '../Dashboard/ProductView';
import {Colors} from '../../common/Styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import DigitalProducts from '../Dashboard/DigitalProducts';
import Additionaldetails from '../Dashboard/Additionaldetails';
import AboutScreen from '../Dashboard/AboutScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

type ContextPropsType = {
  setIsLogedIn?: (prop: boolean) => void;
};

export const AuthContext = createContext<ContextPropsType>({});

const MainNavigator = () => {
  const authContext = useMemo(() => ({}), []);

  return (
    <AuthContext.Provider value={authContext}>
      <AuthStack.Navigator
        initialRouteName={'MainScreen'}
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.GRAY_95,
          },
        }}>
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'MainScreen'}
          component={MainScreen}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'AboutScreen'}
          component={AboutScreen}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'Additionaldetails'}
          component={Additionaldetails}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'DigitalProducts'}
          component={DigitalProducts}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'ProductView'}
          component={ProductView}
        />
      </AuthStack.Navigator>
    </AuthContext.Provider>
  );
};

export default MainNavigator;
