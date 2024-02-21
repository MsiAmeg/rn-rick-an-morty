import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../types/navigation';
import {FilterHeader, FilterTitle, SafeContainer} from '../components/styled';
import {GoBackBtn} from '../components/GoBackBtn';

import styled from 'styled-components/native';
import {colors} from '../constants/colors';
import {SearchIcon} from '../assets/icons/SearchIcon';

export const CharactersFilterInputScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <SafeContainer style={{justifyContent: 'flex-start'}}>
      <FilterHeader>
        <GoBackBtn onPress={() => navigation.goBack()} />
        <FilterTitle>Title</FilterTitle>
      </FilterHeader>
      <SearchInputContainer>
        <SearchIconPosition>
          <SearchIcon />
        </SearchIconPosition>
        <SearchInput
          cursorColor={colors.accent.indigo}
          placeholder="Search"
          placeholderTextColor={colors.grayBase.gray2}
        />
      </SearchInputContainer>
    </SafeContainer>
  );
};

const SearchIconPosition = styled.View<{}>`
  position: absolute;
  left: 10px;
`;

const SearchInputContainer = styled.View`
  position: relative;
  flex-direction: row;
  margin: 6px 16px;
  border-radius: 16px;
  align-items: center;
  background-color: #7676801f;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  min-height: 20px;
  padding: 7px 32px;
  color: ${colors.basic.black};
`;
