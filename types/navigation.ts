import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FilterCharacter, QueryCharacterArgs} from './gql';

export type StackParamList = {
  Characters: FilterCharacter;
  Filter: undefined;
  FilterInput: {
    title: string;
    fieldName: keyof Pick<FilterCharacter, 'name' | 'species'>;
  };
  Detail: QueryCharacterArgs;
};

export type CharactersScreenProps = NativeStackScreenProps<
  StackParamList,
  'Characters'
>;
export type FilterScreenProps = NativeStackScreenProps<
  StackParamList,
  'Filter'
>;
export type FilterInputScreenProps = NativeStackScreenProps<
  StackParamList,
  'FilterInput'
>;
export type CharacterDetailScreenProps = NativeStackScreenProps<
  StackParamList,
  'Detail'
>;
