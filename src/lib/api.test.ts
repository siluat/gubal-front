import { getItemSummaries } from './api';

test('getItemSummaries', async () => {
  const expectData = [[1, '길', '65002', 1, 1, 63]];
  const { data } = await getItemSummaries();
  expect(data).toEqual(expectData);
});
