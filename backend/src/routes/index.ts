import express from 'express';
import users from './api/user';
import products from './api/product';
import orders from './api/order';
import addresses from './api/address';
import mark from './api/mark';
import category from './api/category';
import subcategory from './api/subcategory';
import coupon from './api/coupon';

const routes: express.Router = express.Router();

routes.use('/api/v1/users', users);
routes.use('/api/v1/orders', orders);
routes.use('/api/v1/products', products);
routes.use('/api/v1/addresses', addresses);
routes.use('/api/v1/brand', mark);
routes.use('/api/v1/category', category);
routes.use('/api/v1/subcategory', subcategory);
routes.use('/api/v1/coupon', coupon);

routes.get('/', (_req: express.Request, res: express.Response) => {
  res.status(200);
  res.send('this main page of routes');
});

export default routes;
