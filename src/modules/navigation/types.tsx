/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {StackNavigationProp} from '@react-navigation/stack';

export type AuthStackParamList = {
  MainScreen:undefined;
  AboutScreen:undefined;
  Additionaldetails:undefined;
  DigitalProducts:undefined;
  ProductView:undefined;
};

export type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList>;