import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemName from './ItemName';
import { ItemRarity } from '../../types/ItemRairity';
import colors from '../../styles/colors';

describe('ItemName', () => {
  test('Rarity 1', () => {
    const name = '롱고미안트';
    const rarity: ItemRarity = 1;
    const color = colors.rarity[rarity];

    render(<ItemName rarity={rarity}>{name}</ItemName>);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle(`color: ${color}`);
  });

  test('Rarity 2', () => {
    const name = '롱고미안트';
    const rarity: ItemRarity = 2;
    const color = colors.rarity[rarity];

    render(<ItemName rarity={rarity}>{name}</ItemName>);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle(`color: ${color}`);
  });

  test('Rarity 3', () => {
    const name = '롱고미안트';
    const rarity: ItemRarity = 2;
    const color = colors.rarity[rarity];

    render(<ItemName rarity={rarity}>{name}</ItemName>);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle(`color: ${color}`);
  });

  test('Rarity 4', () => {
    const name = '롱고미안트';
    const rarity: ItemRarity = 2;
    const color = colors.rarity[rarity];

    render(<ItemName rarity={rarity}>{name}</ItemName>);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle(`color: ${color}`);
  });

  test('Rarity 7', () => {
    const name = '롱고미안트';
    const rarity: ItemRarity = 2;
    const color = colors.rarity[rarity];

    render(<ItemName rarity={rarity}>{name}</ItemName>);

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle(`color: ${color}`);
  });
});
