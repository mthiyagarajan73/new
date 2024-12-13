import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Colors } from "../common/Styles";
const SVGComponent = () => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <Path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill={Colors.PRIMARY_COLOR} />
  </Svg>
);
export default SVGComponent;
