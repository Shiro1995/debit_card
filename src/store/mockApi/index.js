import {Server} from 'miragejs';

export function makeServer({environment = 'development'} = {}) {
  let server = new Server({
    routes() {
      this.get('/api/card', () => {
        return {
          card: {
            owner: 'Mark Henry',
            cardNumber: '5647341124132020',
            cvvNumber: '456',
            expireDate: '12/20',
            balance_amount: 3000,
            amountSpent: 4567,
          },
        };
      });
    },
  });

  return server;
}
