import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const IdeaBulbIcon = ({ width = 40, height = 40, fill = '#fff' }) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
        <Rect x="30" y="18" width="4" height="16" fill={fill} />
        <Circle cx="32" cy="38" r="2" fill={fill} />
    <Path
      d="M32 2C19.85 2 10 11.85 10 24C10 31.9 14 38.15 20 42.15V46C20 47.1 20.9 48 22 48H42C43.1 48 44 47.1 44 46V42.15C50 38.15 54 31.9 54 24C54 11.85 44.15 2 32 2ZM32 4C42.05 4 50 11.95 50 24C50 30.65 46.15 36.1 40 38.25V46H24V38.25C17.85 36.1 14 30.65 14 24C14 11.95 21.95 4 32 4Z"
      fill={fill}
    />
    <Rect x="26" y="48" width="12" height="8" fill={fill} />
    <Rect x="24" y="56" width="16" height="4" fill={fill} />
  </Svg>
);

export default IdeaBulbIcon;
