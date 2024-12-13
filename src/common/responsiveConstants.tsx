import DeviceInfo from 'react-native-device-info';
import {responsiveHeight} from '../../utils/helpers';

export const isTablet = DeviceInfo.isTablet();

export const EXTRA_SMALL_TEXT_SIZE = isTablet ? responsiveHeight(1.8) : 8;
export const SMALL_TEXT_SIZE = isTablet ? responsiveHeight(1.8) : 10;
export const MEDIUM_TEXT_SIZE = isTablet ? responsiveHeight(1.6) : 12;
export const TEXT_SIZE = isTablet ? responsiveHeight(2) : 14;
export const TITLE_TEXT_SIZE = isTablet ? responsiveHeight(2.4) : 16;
export const LARGE_TITLE_TEXT_SIZE = isTablet ? responsiveHeight(3) : 18;

export const BUTTON_TEXT_SIZE = isTablet ? responsiveHeight(2.2) : 16;
export const BUTTON_MEDIUM_TEXT_SIZE = isTablet ? responsiveHeight(2.2) : 14;

export const INPUT_TEXT_SIZE = isTablet ? responsiveHeight(1.8) : 16;
export const INPUT_SEARCH_SIZE = isTablet ? responsiveHeight(1.8) : 14;

export const SVG_BACK_SIZE = isTablet ? responsiveHeight(2.8) : 30;

export const INPUT_MEDIUM_HEIGHT = isTablet ? 50 : 44;
