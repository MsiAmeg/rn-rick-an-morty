import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const TvIconActive = () => {
  return (
    <Svg width={29} height={28} viewBox="0 0 29 28" fill="none">
      <Path
        d="M24 8.167H5.332A2.333 2.333 0 003 10.5v12.833a2.333 2.333 0 002.333 2.334h18.666a2.333 2.333 0 002.334-2.334V10.5A2.333 2.333 0 0024 8.167z"
        fill="#5856D6"
      />
      <Path
        d="M20.5 2.333l-5.834 5.834-5.833-5.834"
        stroke="#5856D6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
