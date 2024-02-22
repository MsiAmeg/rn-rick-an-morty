import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GoBackBtn} from '../../components/GoBackBtn';
import {
  SafeContainer,
  StackNavHeader,
  StackNavTitle,
} from '../../components/styled';
import {StackParamList} from '../../types/navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useGetCharacterByIdQuery} from '../../types/gql';

import {ActivityIndicator, ImageBackground} from 'react-native';

import CharacterdDetailBackground from '../../assets/CharacterDetailBackground.png';

import styled from 'styled-components/native';
import {colors} from '../../constants/colors';
import {Text} from 'react-native';

export const CharacterDetailScreen = () => {
  const route = useRoute<RouteProp<StackParamList, 'CharacterDetail'>>();
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const {error, loading, data} = useGetCharacterByIdQuery({
    variables: {id: route.params.id},
  });

  if (error) {
    return (
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: 'black',
        }}>
        {error.message}
      </Text>
    );
  }

  if (!data || loading) {
    return (
      <SafeContainer style={{justifyContent: 'flex-start'}}>
        <StackNavHeader>
          <GoBackBtn onPress={() => navigation.goBack()} />
          <StackNavTitle>Loading...</StackNavTitle>
        </StackNavHeader>
        <ActivityIndicator size={'large'} color={colors.accent.indigo} />
      </SafeContainer>
    );
  }

  return (
    <SafeContainer style={{justifyContent: 'flex-start'}}>
      <StackNavHeader style={{backgroundColor: 'white'}}>
        <GoBackBtn onPress={() => navigation.goBack()} />
        <StackNavTitle>{data?.character?.name}</StackNavTitle>
      </StackNavHeader>
      <Header>
        <BackgroundImage source={CharacterdDetailBackground} blurRadius={7} />
        <Avatar source={{uri: data?.character?.image ?? undefined}} />
        <CharacterInfoWrapper>
          <Status>{data?.character?.status}</Status>
          <Title>{data?.character?.name}</Title>
          <Species>{data?.character?.species?.toUpperCase()}</Species>
        </CharacterInfoWrapper>
      </Header>
      <ContentContainer></ContentContainer>
    </SafeContainer>
  );
};

const Header = styled.View`
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 20px;
  align-items: center;
  background-color: ${colors.grayBase.gray5};
`;
const BackgroundImage = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100px;
`;

const Avatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  border-width: 5px;
  border-color: ${colors.grayBase.gray5};
`;

const CharacterInfoWrapper = styled.View`
  align-items: center;
`;

const Status = styled.Text`
  font-family: Roboto;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${colors.basic.additional};
`;

const Title = styled.Text`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0.34px;
  color: ${colors.basic.black};
`;

const Species = styled.Text`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: -0.08px;
  color: ${colors.grayBase.gray1};
`;

const ContentContainer = styled.View`
  flex: 1;
`;
