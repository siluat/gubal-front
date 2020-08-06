import { getItemSummaries, getItemDetail } from './api';
import { testItem } from '../mocks/data/testItems';

test('getItemSummaries', async () => {
  const expectData = [
    [10057, '롱기누스: 제타', '31887', 135, 4, 5, 50],
    [28292, '절 롱고미안트', '31993', 475, 3, 5, 80],
  ];
  const { data } = await getItemSummaries();
  expect(data).toEqual(expectData);
});

test('getItemDetail', async () => {
  const { data } = await getItemDetail(28292);
  expect(data).toStrictEqual(testItem);
});
