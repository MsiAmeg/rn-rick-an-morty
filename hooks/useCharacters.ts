import {useEffect, useState} from 'react';
import {
  Character,
  FilterCharacter,
  useGetCharactersLazyQuery,
} from '../types/gql';

export const useCharacters = () => {
  const [_GetCharacters, {error, loading, data}] = useGetCharactersLazyQuery();
  const nextPage = data?.characters?.info?.next;

  const [characters, setCharacters] = useState<
    Array<Partial<Character> | null>
  >([]);

  const GetCharacters = (
    page?: number | null | undefined,
    filter?: FilterCharacter,
  ) => {
    _GetCharacters({variables: {page, filter}}).then(({data}) => {
      if (data?.characters?.results) {
        setCharacters([...characters, ...data.characters.results]);
      }
    });
  };

  useEffect(() => {
    GetCharacters();
  }, []);

  return {
    GetCharacters,
    error,
    loading,
    characters,
    nextPage,
  };
};
