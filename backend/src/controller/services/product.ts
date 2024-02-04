import { Request, Response } from 'express';
import { Productservices } from '../../model/services/product';

const productservices = new Productservices();

export default class ProductServicesController {
  getproductsbycate = async (req: Request, res: Response) => {
    try {
      const products = await productservices.productCate(req.params.cate);
      res.json(products);
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };
  mostpopular = async (_req: Request, res: Response) => {
    try {
      const products = await productservices.mostpopular();
      res.json(products);
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };
}
