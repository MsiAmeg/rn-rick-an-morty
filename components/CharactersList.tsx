import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {CharacterItem} from './CharacterItem';
import {useCharacters} from '../hooks/useCharacters';
import {colors} from '../constants/colors';

export const CharactersList = () => {
  const {GetCharacters, error, loading, characters, nextPage} = useCharacters();

  return (
    <FlatList
      numColumns={2}
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      columnWrapperStyle={styles.columnWrapperStyle}
      data={characters}
      renderItem={({item}) => item && CharacterItem(item)}
      onEndReached={() => nextPage && GetCharacters(nextPage)}
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
