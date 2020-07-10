import { decodeIcon, decodeItemCategory } from './decoder';

describe('decode', () => {
  test('decodeIcon()', () => {
    const expectResult = '/ui/icon/031000/031887.png';
    expect(decodeIcon('31887')).toEqual(expectResult);
  });

  test('decodeItemCategory()', () => {
    const expectName = '양손창';
    const expectIcon = '/ui/icon/060000/060104.png';
    const { name, icon } = decodeItemCategory(5);
    expect(name).toEqual(expectName);
    expect(icon).toEqual(expectIcon);
  });
});
