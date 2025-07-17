import { rest } from 'msw';

export const handlers = [
  rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'Test Product',
          price: 10.99,
          description: 'Test description',
          image: 'test.jpg'
        }
      ])
    );
  })
];