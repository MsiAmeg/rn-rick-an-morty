import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const PlanetIcon = () => {
  return (
    <Svg width={29} height={28} viewBox="0 0 29 28" fill="none">
      <G
        clipPath="url(#clip0_3217_1122)"
        stroke="#A3A3A3"
        strokeWidth={2}
        strokeMiterlimit={10}>
        <Path d="M22.424 15.816c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.226S.91 8.804 1.837 7.198c.582-1.004 3.26-.642 6.857.734" />
        <Path d="M14.222 22.666a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3217_1122">
          <Path fill="#fff" transform="translate(.722)" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
