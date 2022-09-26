import Svg, { Path } from "react-native-svg";

export default (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
  >
    <Path
      fill={props.fill}
      d="M26.5 12.67c0 .91-.22 1.77-.6 2.53c1.26.94 2.1 2.43 2.1 4.12c0 2.84-2.32 5.16-5.16 5.16H19v6.54h-6v-6.54h-2.84C7.32 24.48 5 22.16 5 19.32c0-1.69.84-3.18 2.1-4.12a5.662 5.662 0 0 1 4.4-8.16V7c0-2.76 2.24-5 5-5s5 2.24 5 5v.04c2.81.33 5 2.72 5 5.63ZM15 24.48v4.54h2v-4.54h-2Z"
    />
  </Svg>
);