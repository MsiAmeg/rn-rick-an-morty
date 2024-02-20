import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import {FilterCharacter} from '../types/gql';

type FiltersT = {
  charactersfilters: FilterCharacter;
  setCharactersFilter: Dispatch<SetStateAction<FilterCharacter>>;
  isFiltersApplied: boolean;
};

const initalValues: FiltersT = {
  charactersfilters: {},
  setCharactersFilter: () => {},
  isFiltersApplied: false,
};

export const CharactersFiltersContext = createContext(initalValues);

export const FiltersProvider = ({children}: PropsWithChildren) => {
  const [charactersfilters, setCharactersFilter] = useState<FilterCharacter>(
    {},
  );
  const isFiltersApplied = Object.values(charactersfilters).some(
    el => el !== undefined,
  );

  const characterFilterValues: FiltersT = {
    charactersfilters,
    setCharactersFilter,
    isFiltersApplied,
  };

  return (
    <CharactersFiltersContext.Provider value={characterFilterValues}>
      {children}
    </CharactersFiltersContext.Provider>
  );
};
