import {useContext} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/navigation';
import {
  Devider,
  FilterHeader,
  FilterTitle,
  SafeContainer,
} from '../components/styled';
import {GoBackBtn} from '../components/GoBackBtn';

import {colors} from '../constants/colors';
import {SearchIcon} from '../assets/icons/SearchIcon';
import {VoiceIcon} from '../assets/icons/VoiceIcon';

import {CharactersFiltersContext} from '../contexts/CharacterFilterContext';

import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import styled from 'styled-components/native';

export const CharactersFilterInputScreen = () => {
  const route = useRoute<RouteProp<StackParamList, 'FilterInput'>>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const {charactersfilters, setCharactersFilter} = useContext(
    CharactersFiltersContext,
  );

  const handleSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    setCharactersFilter({
      ...charactersfilters,
      [route.params.fieldName]: e.nativeEvent.text,
    });
    navigation.goBack();
  };

  return (
    <SafeContainer style={{justifyContent: 'flex-start'}}>
      <FilterHeader>
        <GoBackBtn onPress={() => navigation.goBack()} />
        <FilterTitle>{route.params.title}</FilterTitle>
      </FilterHeader>
      <SearchInputContainer>
        <SearchIconWrapper />
        <SearchInput
          onSubmitEditing={handleSubmit}
          cursorColor={colors.accent.indigo}
          placeholder="Search"
          placeholderTextColor={colors.grayBase.gray2}
        />
        <VoiceIconWrapper />
      </SearchInputContainer>
      <Devider />
    </SafeContainer>
  );
};

const SearchIconWrapper = styled.View.attrs(() => ({
  children: <SearchIcon />,
}))`
  position: absolute;
  left: 10px;
`;

const VoiceIconWrapper = styled.Pressable.attrs(() => ({
  children: <VoiceIcon />,
}))`
  position: absolute;
  right: 10px;
`;

const SearchInputContainer = styled.View`
  position: relative;
  flex-direction: row;
  margin: 6px 16px;
  align-items: center;
  border-radius: 16px;
  background-color: #7676801f;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  min-height: 20px;
  padding: 7px 32px;
  color: ${colors.basic.black};
`;
