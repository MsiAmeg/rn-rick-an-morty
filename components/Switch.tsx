import {colors} from '../constants/colors';
import styled from 'styled-components/native';

type SwitchProps = {
  isActive: boolean;
};

export const Switch = ({isActive}: SwitchProps) => {
  return (
    <SectionItemSwitch $isActive={isActive}>
      <SectionItemSwitchCircle $isActive={isActive} />
    </SectionItemSwitch>
  );
};

const SectionItemSwitch = styled.View<{$isActive: boolean}>`
  width: 24px;
  height: 24px;
  border: 1px solid
    ${props => (props.$isActive ? colors.accent.indigo : colors.grayBase.gray2)};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

const SectionItemSwitchCircle = styled.Pressable<{$isActive: boolean}>`
  width: 14px;
  height: 14px;
  background-color: ${props =>
    props.$isActive ? colors.accent.indigo : 'transparent'};
  border-radius: 100px;
`;
