import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../types/navigation';

import {CharactersList} from './CharactersList';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {SafeContainer} from './styled';
import {colors} from '../constants/colors';

import styled from 'styled-components/native';

export const Characters = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <SafeContainer>
      <Header>
        <FilterBtn onPress={() => navigation.navigate('Filter')}>
          <FilterBtnTxt>Filter</FilterBtnTxt>
        </FilterBtn>
        <Title>Character</Title>
      </Header>
      <CharactersList />
    </SafeContainer>
  );
};

const Header = styled.View`
  width: 100%;
  background-color: ${colors.grayBase.gray5};
  padding: 10px 16px;
`;

const Title = styled.Text`
  width: 100%;
  text-align: left;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: ${colors.basic.black};
  padding-bottom: 10px;
`;

const FilterBtn = styled.Pressable``;

const FilterBtnTxt = styled.Text`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: -0.41px;
  text-align: right;
  color: ${colors.accent.indigo};
`;
