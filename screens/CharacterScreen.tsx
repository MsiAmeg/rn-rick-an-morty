import {Text} from 'react-native';
import {SafeContainer} from '../components/styled';
import {useGetAllCharactersQuery} from '../types/gql';

export const CharacterScreen = () => {
  const {error, loading, data} = useGetAllCharactersQuery();
  return (
    <SafeContainer>
      <Text>Character Screen</Text>
      {data?.characters?.results?.map(el => (
        <Text key={el?.id}>{el?.name}</Text>
      ))}
    </SafeContainer>
  );
};
