import styled from 'styled-components/native';
import {colors} from '../constants/colors';

type SwitchProps = {
  isActive: boolean;
};

export const Switch = ({isActive}: SwitchProps) => {
  return (
    <SectionItemSwitch $IsActive={isActive}>
      <SectionItemSwitchCircle $IsActive={isActive} />
    </SectionItemSwitch>
  );
};

const SectionItemSwitch = styled.View<{$IsActive: boolean}>`
  width: 24px;
  height: 24px;
  border: 1px solid
    ${props => (props.$IsActive ? colors.accent.indigo : colors.grayBase.gray2)};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

const SectionItemSwitchCircle = styled.Pressable<{$IsActive: boolean}>`
  width: 14px;
  height: 14px;
  background-color: ${props =>
    props.$IsActive ? colors.accent.indigo : 'transparent'};
  border-radius: 100px;
`;
