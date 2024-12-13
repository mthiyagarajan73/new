import {
  Platform,
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const IS_ANDROID = Platform.OS === 'android';

export const responsiveHeight = (value: number) => heightPercentageToDP(value);

export const responsiveWidth = (value: number) => widthPercentageToDP(value);