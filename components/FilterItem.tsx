import {Switch} from './Switch';

import {colors} from '../constants/colors';

import styled from 'styled-components/native';

type FilterItemsT = {
  onPress: () => void;
  title: string;
  isActive: boolean;
  // isLast: boolean;
};

export const FilterItem = ({
  title,
  isActive,
  // isLast,
  onPress,
}: FilterItemsT) => {
  return (
    <SectionItemContainer onPress={onPress}>
      <Switch isActive={isActive} />
      <SectionItemText>{title}</SectionItemText>
      {/* <SectionItemText $IsLast={isLast}>{title}</SectionItemText> */}
    </SectionItemContainer>
  );
};

const SectionItemContainer = styled.Pressable`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 13px;
  padding-left: 16px;
`;

const SectionItemText = styled.Text`
  flex: 1;
  font-family: Roboto;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  text-align: left;
  color: ${colors.basic.black};
  padding-top: 11px;
  padding-bottom: 11px;
`;
// const SectionItemText = styled.Text<{$IsLast: boolean}>`
//   flex: 1;
//   font-family: Roboto;
//   font-size: 17px;
//   font-weight: 400;
//   line-height: 22px;
//   letter-spacing: -0.41px;
//   text-align: left;
//   color: ${colors.basic.black};
//   ${props => !props.$IsLast && 'border-bottom-width: 1px;'}
//   border-color: ${colors.grayBase.gray2};
//   padding-top: 11px;
//   padding-bottom: 11px;
// `;
