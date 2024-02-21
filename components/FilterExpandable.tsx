import {PressableProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../constants/colors';
import {Switch} from './Switch';

type FilterExpandableProps = PressableProps & {
  title: string;
  desription: string;
  isActive: boolean;
};

export const FilterExpandable = ({
  title,
  desription,
  isActive,
  ...props
}: FilterExpandableProps) => {
  return (
    <Container {...props}>
      <Switch isActive={isActive} />
      <InfoWrapper>
        <Title>{title}</Title>
        <Description>{desription}</Description>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.Pressable`
  width: 100%;
  flex-direction: row;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: ${colors.grayBase.gray2};
  padding: 9px 16px;
  align-items: center;
  gap: 12px;
`;

const InfoWrapper = styled.View``;

const Title = styled.Text`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${colors.basic.black};
`;
const Description = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${colors.basic.additional};
`;
const Date = styled.Text``;
