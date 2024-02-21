import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../types/navigation';

import {CharactersList} from './CharactersList';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {SafeContainer} from './styled';
import {colors} from '../constants/colors';

import styled from 'styled-components/native';
import {useContext} from 'react';
import {CharactersFiltersContext} from '../contexts/CharacterFilterContext';

export const Characters = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const {isFiltersApplied} = useContext(CharactersFiltersContext);

  return (
    <SafeContainer>
      <Header>
        <FilterBtn onPress={() => navigation.navigate('Filter')}>
          {isFiltersApplied && <FilterIndicator />}
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
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
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

const FilterBtn = styled.Pressable`
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
`;

const FilterIndicator = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 100px;
  background-color: ${colors.accent.indigo};
`;
const FilterBtnTxt = styled.Text`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: -0.41px;
  text-align: right;
  color: ${colors.accent.indigo};
`;
