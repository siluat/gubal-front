import { rest } from 'msw';
import { testItem } from './data/testItems';

export const handlers = [
  rest.get('/data/ItemSummaries.json', (_req, res, ctx) => {
    return res(ctx.json([[10057, '롱기누스: 제타', '31887', 135, 4, 5, 50]]));
  }),

  rest.get(
    'https://gubal.s3.ap-northeast-2.amazonaws.com/data/item/:filename',
    (req, res, ctx) => {
      const { filename } = req.params;

      if (filename === '28292.json') {
        return res(ctx.json(testItem));
      }

      return res(ctx.status(404));
    },
  ),
];
