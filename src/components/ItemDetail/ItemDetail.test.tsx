import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetail from './ItemDetail';
import {
  testItem,
  uniqueItem,
  notUniqueItem,
  untradableItem,
  tradableItem,
  potion,
} from '../../mocks/data/testItems';
import { Item } from '../../types/Item';

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

  test(`아이템 카테고리 정보 표시`, () => {
    render(<ItemDetail item={testItem} />);
    expect(screen.getByText('양손창')).toBeInTheDocument();
  });

  test(`문장 장식이 가능한 아이템은 관련 아이콘 표시`, () => {
    const item: Item = {
      ...testItem,
      isCrestWorthy: true,
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByAltText('문장 장식 가능')).toBeInTheDocument();
  });

  test(`문장 장식이 불가능한 아이템은 관련 아이콘 표시`, () => {
    const item: Item = {
      ...testItem,
      isCrestWorthy: false,
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByAltText('문장 장식 불가')).toBeInTheDocument();
  });

  test(`환상의 옷장에 보관이 가능한 아이템은 관련 아이콘 표시`, () => {
    const item: Item = {
      ...testItem,
      isGlamourous: true,
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByAltText('환상의 옷장 보관 가능')).toBeInTheDocument();
  });

  test(`환상의 옷장에 보관이 불가능한 아이템은 관련 아이콘 표시`, () => {
    const item: Item = {
      ...testItem,
      isGlamourous: false,
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByAltText('환상의 옷장 보관 불가')).toBeInTheDocument();
  });

  test(`추억의 보관함에 보관이 가능한 아이템은 관련 아이콘 표시`, () => {
    const item: Item = {
      ...testItem,
      isCollectable: true,
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByAltText('추억의 보관함 보관 가능')).toBeInTheDocument();
  });

  test(`추억의 보관함에 보관이 불가능한 아이템은 관련 아이콘 표시`, () => {
    const item: Item = {
      ...testItem,
      isCollectable: false,
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByAltText('추억의 보관함 보관 불가')).toBeInTheDocument();
  });

  test(`아이템 카테고리에 따라 아이템 레벨을 표시한다`, () => {
    render(<ItemDetail item={testItem} />);
    expect(screen.getByText(/아이템 레벨/i)).toBeInTheDocument();
  });

  test(`아이템 카테고리에 따라 아이템 레벨을 표시하지 않는다`, () => {
    render(<ItemDetail item={potion} />);
    expect(screen.queryByText(/아이템 레벨/i)).not.toBeInTheDocument();
  });
});
