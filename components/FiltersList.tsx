import {useCallback, useContext} from 'react';

import {SectionList, SectionListRenderItem} from 'react-native';

import {FilterItem} from './FilterItem';

import {FiltersDataT, filtersData} from '../constants/filtersData';
import {colors} from '../constants/colors';

import {CharactersFiltersContext} from '../contexts/CharacterFilterContext';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';
import {FilterExpandable} from './FilterExpandable';

import styled from 'styled-components/native';

export const FiltersList = () => {
  const {charactersfilters, setCharactersFilter} = useContext(
    CharactersFiltersContext,
  );

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const renderItem: SectionListRenderItem<
    {
      id: number;
      title: string;
    },
    FiltersDataT
  > = useCallback(
    ({section, item: {title}, index}) => {
      const isActive = charactersfilters[section.id] === title;
      const isLast = index === section.data.length - 1;

      return (
        <>
          <FilterItem
            isActive={isActive}
            // isLast={isLast}
            title={title}
            onPress={() =>
              setCharactersFilter({
                ...charactersfilters,
                [section.id]: title,
              })
            }
          />
          {!isLast && <SectionsSeparator $width={87} />}
        </>
      );
    },
    [charactersfilters],
  );

  return (
    <FiltersContainer>
      <ExpandableFiltersWrapper>
        <FilterExpandable
          isActive={!!charactersfilters.species}
          title="Species"
          desription="Enter species"
          onPress={() =>
            navigation.navigate('FilterInput', {
              title: 'Species',
              fieldName: 'species',
            })
          }
        />
        <FilterExpandable
          isActive={!!charactersfilters.name}
          title="Name"
          desription="Give a name"
          onPress={() =>
            navigation.navigate('FilterInput', {
              title: 'Name',
              fieldName: 'name',
            })
          }
        />
      </ExpandableFiltersWrapper>
      <SectionList
        style={{flex: 1, width: '100%'}}
        sections={filtersData}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        SectionSeparatorComponent={() => <SectionsSeparator $width={100} />}
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

const ExpandableFiltersWrapper = styled.View`
  width: 100%;
  gap: 20px;
`;

const SectionTitle = styled.Text`
  width: 100%;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  text-align: left;
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 10px;
  color: ${colors.grayBase.gray2};
`;

const SectionsSeparator = styled.View<{$width: number}>`
  align-self: flex-end;
  width: ${props => props.$width}%;
  border-bottom-width: 0.5px;
  border-top-width: 0.5px;
  border-color: ${colors.grayBase.gray2};
`;
