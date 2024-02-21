import {ArrowIcon} from '../assets/icons/ArrowIcon';

import {colors} from '../constants/colors';

import {PressableProps} from 'react-native';

import styled from 'styled-components/native';

export const GoBackBtn = ({...props}: PressableProps) => {
  const Btn = styled.Pressable`
    position: absolute;
    left: 8.5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  `;

  const BtnText = styled.Text`
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.41px;
    color: ${colors.accent.indigo};
  `;

  return (
    <Btn {...props}>
      <ArrowIcon />
      <BtnText>Back</BtnText>
    </Btn>
  );
};
