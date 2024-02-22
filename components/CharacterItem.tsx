import {colors} from '../constants/colors';
import {Character} from '../types/gql';

import styled from 'styled-components/native';

type CharacterItemProps = Partial<Character> & {
  handleClick?: () => void;
};

export const CharacterItem = ({
  name,
  image,
  status,
  handleClick,
}: CharacterItemProps) => {
  return (
    <CharacterCard onPress={handleClick}>
      <CharacterImage resizeMode="cover" source={{uri: image ?? ''}} />
      <CharacterInfoContainer>
        <CharacterStatus>{status}</CharacterStatus>
        <CharacterName numberOfLines={2}>{name}</CharacterName>
      </CharacterInfoContainer>
    </CharacterCard>
  );
};

const CharacterCard = styled.Pressable`
  flex: 1;
  width: 100%;
  max-height: 220px;
  border-color: ${colors.grayBase.gray5};
  border-width: 1px;
  border-radius: 8px;
  overflow: hidden;
`;

const CharacterImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;
const CharacterInfoContainer = styled.View`
  height: 100%;
  max-height: 80px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
`;
const CharacterName = styled.Text`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  letter-spacing: -0.41px;
  text-align: left;
  color: ${colors.basic.black};
`;
const CharacterStatus = styled.Text`
  font-family: Roboto;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.07px;
  text-align: left;
  color: ${colors.basic.additional};
`;
