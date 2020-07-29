import { renderHook } from '@testing-library/react-hooks';
import useItem from './useItem';
import { notDeepEqual } from 'assert';

describe('useItem', () => {
  test('loading, item, error를 반환한다', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useItem(28292));

    await waitForNextUpdate();

    const { loading, item, error } = result.current;

    expect(loading).toBeDefined();
    expect(item).toBeDefined();
    expect(error).toBeDefined();
  });

  test('loading 상태가 정상적으로 업데이트된다', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useItem(28292));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
  });

  test('item 정보를 정상적으로 반환한다', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useItem(28292));

    await waitForNextUpdate();

    expect(result.current.item).not.toBeNull();
    expect(result.current.item?.name).toBe('절 롱고미안트');
  });

  test('유효하지 않은 id를 사용시 에러를 반환한다', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useItem(-123));

    await waitForNextUpdate();

    expect(result.current.item).toBeNull();
    expect(result.current.error).not.toBeNull();
  });
});
