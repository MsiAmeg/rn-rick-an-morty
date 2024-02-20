import {useContext, useState} from 'react';

import {SectionList} from 'react-native';

import {FilterItem} from './FilterItem';

import {FilterCharacter} from '../types/gql';

import {filtersData} from '../constants/filtersData';
import {colors} from '../constants/colors';

import styled from 'styled-components/native';
import {CharactersFiltersContext} from '../contexts/CharacterFilterContext';

export const FiltersList = () => {
  const {charactersfilters, setCharactersFilter} = useContext(
    CharactersFiltersContext,
  );

  return (
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
  );
};

const SectionTitle = styled.Text`
  width: 100%;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-align: left;
  padding: 20px 16px 10px;
`;

const SectionsSeporator = styled.View`
  width: 100%;
  border-bottom-width: 0.5px;
  border-top-width: 0.5px;
  border-color: ${colors.grayBase.gray2};
`;
