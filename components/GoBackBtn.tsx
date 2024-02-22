import {ArrowLeft} from '../assets/icons/ArrowLeft';

import {colors} from '../constants/colors';

import {PressableProps} from 'react-native';

import styled from 'styled-components/native';

export const GoBackBtn = ({...props}: PressableProps) => {
  return (
    <Btn {...props}>
      <ArrowLeft />
      <BtnText>Back</BtnText>
    </Btn>
  );
};

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
