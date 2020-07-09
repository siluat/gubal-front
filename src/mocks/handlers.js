import { rest } from 'msw';

export const handlers = [
  rest.get('/data/ItemSummaries.json', (_req, res, ctx) => {
    return res(ctx.json([[1, '길', '65002', 1, 1, 63]]));
  }),
];
