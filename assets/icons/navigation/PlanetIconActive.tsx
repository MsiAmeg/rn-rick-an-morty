import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const PlanetIconActive = () => {
  return (
    <Svg width={29} height={28} viewBox="0 0 29 28" fill="none">
      <G clipPath="url(#clip0_3294_861)">
        <Path
          d="M20.222 14.5l2.202 1.316c3.066 2.46 4.771 4.635 4.183 5.653-.93 1.607-7.228-.285-14.068-4.227C5.7 13.303.91 8.804 1.837 7.198c.582-1.004 3.26-.642 6.857.734.842.356 2.628 1.168 3.028 1.568"
          stroke="#5856D6"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.726 21.346a8.374 8.374 0 001.648-1.391c-2.215-.848-4.744-2.06-7.334-3.553-2.596-1.496-4.919-3.08-6.767-4.576a8.31 8.31 0 00-.376 2.137c1.684 1.328 3.781 2.746 6.142 4.106 2.38 1.371 4.678 2.483 6.687 3.277zm-2.554 1.091a57.547 57.547 0 01-5.132-2.635 57.63 57.63 0 01-4.805-3.084 8.337 8.337 0 009.937 5.72zm-2.133-7.768c2.72 1.568 5.335 2.795 7.531 3.598a8.333 8.333 0 00-14.434-8.32c1.794 1.497 4.172 3.149 6.903 4.722z"
          fill="#5856D6"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3294_861">
          <Path fill="#fff" transform="translate(.722)" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
