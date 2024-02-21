import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {FilterHeader, FilterTitle, SafeContainer} from '../components/styled';
import {FiltersList} from '../components/FiltersList';

import {colors} from '../constants/colors';

import {CharactersFiltersContext} from '../contexts/CharacterFilterContext';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/navigation';

import styled from 'styled-components/native';

export const CharactersFilterScreen = () => {
  const {charactersfilters, setCharactersFilter, isFiltersApplied} = useContext(
    CharactersFiltersContext,
  );

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <SafeContainer style={{gap: 20}}>
      <FilterHeader>
        {isFiltersApplied && (
          <ClearBtn onPress={() => setCharactersFilter({})}>
            <ClearBtnText>Clear</ClearBtnText>
          </ClearBtn>
        )}
        <FilterTitle>Filter</FilterTitle>
        <SubmitBtn
          onPress={() => {
            navigation.navigate('Characters', charactersfilters);
          }}>
          <SubmitBtnText>APPLY</SubmitBtnText>
        </SubmitBtn>
      </FilterHeader>
      <FiltersList />
    </SafeContainer>
  );
};

const ClearBtn = styled.Pressable`
  position: absolute;
  left: 0;
  padding: 5px 12px;
  margin: 0 15px;
`;

const ClearBtnText = styled.Text`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.41px;
  text-align: left;
  color: ${colors.accent.indigo};
`;

const SubmitBtn = styled.Pressable`
  position: absolute;
  right: 0;
  background-color: ${colors.accent.indigo};
  border-radius: 16px;
  padding: 5px 12px;
  margin: 0 15px;
`;

const SubmitBtnText = styled.Text`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: -0.08px;
  text-align: center;
  color: ${colors.basic.white};
`;
