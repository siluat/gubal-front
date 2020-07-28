import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetail from './ItemDetail';
import {
  testItem,
  uniqueItem,
  notUniqueItem,
  untradableItem,
  tradableItem,
} from '../../mocks/data/testItems';

describe('ItemDetail', () => {
  test('기본 렌더링', () => {
    render(<ItemDetail item={testItem} />);

    const altTextForItemIcon = `${testItem.name} 아이콘`;
    const itemIcon = screen.getByAltText(altTextForItemIcon);
    expect(itemIcon).toBeInTheDocument();

    const name = screen.getByText(testItem.name);
    expect(name).toBeInTheDocument();
  });

  test(`고유 아이템일 경우, '고유' 텍스트 표시`, () => {
    render(<ItemDetail item={uniqueItem} />);
    expect(screen.getByText('고유')).toBeInTheDocument();
  });

  test(`고유 아이템이 아닐 경우, '고유' 텍스트 비표시`, () => {
    render(<ItemDetail item={notUniqueItem} />);
    expect(screen.queryByText('고유')).not.toBeInTheDocument();
  });

  test(`거래 불가 아이템인 경우, '거래 불가' 텍스트 표시`, () => {
    render(<ItemDetail item={untradableItem} />);
    expect(screen.getByText('거래 불가')).toBeInTheDocument();
  });

  test(`거래 가능인 아이템일 경우, '거래 불가' 텍스트 비표시`, () => {
    render(<ItemDetail item={tradableItem} />);
    expect(screen.queryByText('거래 불가')).not.toBeInTheDocument();
  });
});
