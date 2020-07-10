import { decodeIcon, decodeItemCategory } from './decoder';

describe('decode', () => {
  test('decodeIcon()', () => {
    const expectResult = '/ui/icon/031000/031887.png';
    expect(decodeIcon('31887')).toEqual(expectResult);
  });

  test('decodeItemCategory() 정상 케이스', () => {
    const expectCategory = {
      name: '양손창',
      icon: '/ui/icon/060000/060104.png',
    };
    const category = decodeItemCategory(5);
    expect(category).toEqual(expectCategory);
  });

  test('decodeItemCategory() 예외 케이스', () => {
    const expectCategory = {
      name: '알수없음',
      icon: '',
    };
    const category = decodeItemCategory(-5);
    expect(category).toEqual(expectCategory);
  });
});
