import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator, FlatList, StyleSheet, Text} from 'react-native';
import {loadErrorMessages, loadDevMessages} from '@apollo/client/dev';

import {CharacterItem} from './CharacterItem';

import {useGetCharactersQuery} from '../types/gql';

import {colors} from '../constants/colors';
import {StackParamList} from '../types/navigation';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

export const CharactersList = () => {
  const route = useRoute<RouteProp<StackParamList, 'Characters'>>();

  const {fetchMore, error, loading, data} = useGetCharactersQuery({
    variables: {filter: route.params},
    notifyOnNetworkStatusChange: true,
  });
  const nextPage = data?.characters?.info?.next;

  if (error) {
    <Text>Error: {error.message}</Text>;
  }

  const handleEndReached = () => {
    if (!loading && nextPage) {
      fetchMore({
        variables: {page: nextPage, filter: route.params},
      });
    }
  };

  return (
    <FlatList
      numColumns={2}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
      data={data?.characters?.results}
      renderItem={({item}) => item && CharacterItem(item)}
      keyExtractor={item => item?.id!}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() =>
        loading && (
          <ActivityIndicator size={'large'} color={colors.accent.indigo} />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    gap: 17,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 40,
  },
  columnWrapperStyle: {flex: 1, gap: 17, justifyContent: 'center'},
});
