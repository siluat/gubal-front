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
  pugilistArm,
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
    expect(screen.getByText(/아이템 레벨/)).toBeInTheDocument();
  });

  test(`아이템 카테고리에 따라 아이템 레벨을 표시하지 않는다`, () => {
    render(<ItemDetail item={potion} />);
    expect(screen.queryByText(/아이템 레벨/)).not.toBeInTheDocument();
  });

  test(`격투무기일 경우 물리 성능 표시`, () => {
    render(<ItemDetail item={pugilistArm} />);
    expect(screen.getByText(/물리 기본 성능/)).toBeInTheDocument();
    expect(screen.getByText(/물리 자동 공격/)).toBeInTheDocument();
    expect(screen.getByText(/공격 주기/)).toBeInTheDocument();
  });

  test(`추가 능력치가 있을 경우 추가 능력치 표시`, () => {
    const item: Item = {
      ...pugilistArm,
      baseParam4: {
        name: '극대화',
        value: 467,
      },
      baseParam5: {
        name: '민첩',
        value: 431,
      },
    };
    render(<ItemDetail item={item} />);
    expect(screen.getByText(/추가 능력치/)).toBeInTheDocument();
    expect(screen.getByText(/극대화/)).toBeInTheDocument();
    expect(screen.getByText(/467/)).toBeInTheDocument();
    expect(screen.getByText(/민첩/)).toBeInTheDocument();
    expect(screen.getByText(/431/)).toBeInTheDocument();
  });

  test(`추가 능력치가 없을 경우 추가 능력치를 표시하지 않음`, () => {
    const item: Item = {
      ...pugilistArm,
      baseParam0: undefined,
      baseParam1: undefined,
      baseParam2: undefined,
      baseParam3: undefined,
      baseParam4: undefined,
      baseParam5: undefined,
    };
    render(<ItemDetail item={item} />);
    expect(screen.queryByText(/추가 능력치/)).not.toBeInTheDocument();
  });

  test(`마테리아 슬롯 0개`, () => {
    const item: Item = {
      ...pugilistArm,
      materiaSlotCount: 0,
    };
    render(<ItemDetail item={item} />);
    expect(screen.queryByAltText(/마테리아 슬롯/)).not.toBeInTheDocument();
  });

  test(`마테리아 슬롯 1개`, () => {
    const item: Item = {
      ...pugilistArm,
      materiaSlotCount: 1,
    };
    render(<ItemDetail item={item} />);
    const slotIconCount = screen.getAllByAltText(/마테리아 슬롯/).length;
    expect(slotIconCount).toBe(1);
  });

  test(`마테리아 슬롯 2개`, () => {
    const item: Item = {
      ...pugilistArm,
      materiaSlotCount: 2,
    };
    render(<ItemDetail item={item} />);
    const slotIconCount = screen.getAllByAltText(/마테리아 슬롯/).length;
    expect(slotIconCount).toBe(2);
  });

  test(`수리 가능 아이템의 수리 관련 정보 표시`, () => {
    render(<ItemDetail item={pugilistArm} />);
    expect(screen.getAllByText(/대장장이/).length).toBeGreaterThan(0);
    expect(screen.getByText(/레벨 60 이상/)).toBeInTheDocument();
    expect(screen.getByText(/7등급 암흑물질/)).toBeInTheDocument();
  });

  test(`마테리아 슬롯이 있을 경우 마테리아 장착 가능 직업과 레벨 표시`, () => {
    render(<ItemDetail item={pugilistArm} />);
    expect(screen.getByText(/마테리아 장착 레벨/)).toBeInTheDocument();
    expect(screen.getByText(/대장장이 레벨 70 이상/)).toBeInTheDocument();
  });

  test(`마테리아 슬롯이 없을 경우 마테리아 장착 가능 직업과 레벨 미표시`, () => {
    const item: Item = {
      ...pugilistArm,
      materiaSlotCount: 0,
    };
    render(<ItemDetail item={item} />);
    expect(screen.queryByText(/마테리아 장착 레벨/)).not.toBeInTheDocument();
    expect(screen.queryByText(/대장장이 레벨 70 이상/)).not.toBeInTheDocument();
  });

  test(`마테리아화 가능 표시`, () => {
    const ableItem: Item = {
      ...pugilistArm,
    };
    render(<ItemDetail item={ableItem} />);
    expect(screen.getByTestId('extractable').textContent).toBe('O');
  });

  test(`마테리아화 불가능 표시`, () => {
    const unableItem: Item = {
      ...pugilistArm,
      materializeType: 0,
    };
    render(<ItemDetail item={unableItem} />);
    expect(screen.getByTestId('extractable').textContent).toBe('X');
  });

  test(`장비 투영 가능 표시`, () => {
    const ableItem: Item = {
      ...pugilistArm,
      glamourItem: '환상의 프리즘',
    };
    render(<ItemDetail item={ableItem} />);
    expect(screen.getByTestId('projectable').textContent).toBe('O');
  });

  test(`장비 투영 불가능 표시`, () => {
    const unableItem: Item = {
      ...pugilistArm,
      glamourItem: null,
    };
    render(<ItemDetail item={unableItem} />);
    expect(screen.getByTestId('projectable').textContent).toBe('X');
  });

  test(`아이템 적정 분해 숙련도 표시`, () => {
    const desynthesizableItem: Item = {
      ...pugilistArm,
      salvage: 430,
    };
    render(<ItemDetail item={desynthesizableItem} />);
    expect(screen.getByTestId('salvage').textContent).toBe('430');
  });

  test(`분해 불가 아이템 표시`, () => {
    const notDesynthesizableItem: Item = {
      ...pugilistArm,
      salvage: null,
    };
    render(<ItemDetail item={notDesynthesizableItem} />);
    expect(screen.getByTestId('salvage').textContent).toBe('X');
  });
});
