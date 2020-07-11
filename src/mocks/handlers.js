import { rest } from 'msw';

export const handlers = [
  rest.get('/data/ItemSummaries.json', (_req, res, ctx) => {
    return res(ctx.json([[10057, '롱기누스: 제타', '31887', 135, 4, 5, 50]]));
  }),
];
