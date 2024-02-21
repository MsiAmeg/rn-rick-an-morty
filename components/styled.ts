import {SafeAreaView} from 'react-native';

import {colors} from '../constants/colors';

import styled from 'styled-components/native';

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FilterHeader = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FilterTitle = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${colors.basic.black};
  padding: 12px 0;
`;

export const Devider = styled.View`
  width: 100%;
  height: 0.5px;
  margin-top: 8px;
  background-color: ${colors.grayBase.gray5};
`;
