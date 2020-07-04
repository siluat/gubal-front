import { nop } from './library';

describe('library actions', () => {
  test('액션 생성', () => {
    const nopAction = {
      type: 'library/NOP',
    };
    expect(nop()).toEqual(nopAction);
  });
});
