import { ItemRarity } from '../../types/ItemRairity';
import styled from '@emotion/styled';
import colors from '../../styles/colors';

export type ItemNameProps = {
  rarity: ItemRarity;
};

const ItemName = styled('p')`
  margin: 0;
  color: ${(props: ItemNameProps) => colors.rarity[props.rarity]};
`;

export default ItemName;
