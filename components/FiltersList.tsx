import {useContext} from 'react';

import {Pressable, SectionList} from 'react-native';

import {FilterItem} from './FilterItem';

import {filtersData} from '../constants/filtersData';
import {colors} from '../constants/colors';

import {CharactersFiltersContext} from '../contexts/CharacterFilterContext';

import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';

export const FiltersList = () => {
  const {charactersfilters, setCharactersFilter} = useContext(
    CharactersFiltersContext,
  );

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <FiltersContainer>
      <Pressable
        onPress={() => navigation.navigate('FilterInput')}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
        }}></Pressable>
      <SectionList
        style={{flex: 1, width: '100%'}}
        sections={filtersData}
        renderItem={({section, item: {title}, index}) => {
          const isActive = charactersfilters[section.id] === title;
          const isLast = index === section.data.length - 1;

          return (
            <FilterItem
              isActive={isActive}
              isLast={isLast}
              title={title}
              onPress={() =>
                setCharactersFilter({
                  ...charactersfilters,
                  [section.id]: title,
                })
              }
            />
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        SectionSeparatorComponent={() => <SectionsSeporator />}
      />
    </FiltersContainer>
  );
};
const FiltersContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const SectionTitle = styled.Text`
  width: 100%;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-align: left;
  padding: 20px 16px 10px;
  color: ${colors.grayBase.gray2};
`;

const SectionsSeporator = styled.View`
  width: 100%;
  border-bottom-width: 0.5px;
  border-top-width: 0.5px;
  border-color: ${colors.grayBase.gray2};
`;
