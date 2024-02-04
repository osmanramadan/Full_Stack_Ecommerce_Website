import { Request, Response } from 'express';
import { Order} from '../model/order';
import { order } from '../types/order';
import { Product } from '../model/product';
import { product } from '../types/product';
import fs from 'fs';
import path from 'path';

const orderobject = new Order();
const productobject = new Product();


export default class Ordercontroller {

  index = async (_req: Request, res: Response) => {
    try {
      const data = [];
      // @ts-ignore
      const orders: order[] = await orderobject.index();
      if (orders) {
        for (const value of orders) {
          const items: any = [];
          // @ts-ignore
          for (const v of value.items) {
            const products: product | boolean = await productobject.show(v[0]);
            const imagePath = path.join(
              __dirname,
              '../uploads/products',
              // @ts-ignore
              products.coverimage
            );

            try {
              const imageData = await fs.promises.readFile(imagePath);

              const imgCover = imageData.toString('base64');
              // @ts-ignore
              products.imageCoverData = imgCover;
            } catch (err) {
              res.json({ status: 'fail' });
              return;
            }

            // @ts-ignore
            items.push([products, v[1], v[2]]);

          }
          value.items = items;
          data.push(value);
        }
      }

      res.json({ status: 'success', data: data });
      return;
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const data = [];
      // @ts-ignore
      const orderbyuser: order[] = await orderobject.show(
        parseInt(req.params.userid)
      );
      if (orderbyuser) {
        for (const value of orderbyuser) {
          const items: any = [];
          // @ts-ignore
          for (const v of value.items) {
            const products: product | boolean = await productobject.show(v[0]);
            // @ts-ignore
            const imagePath = path.join(
              __dirname,
              '../uploads/products',
              // @ts-ignore
              products.coverimage
            );

            try {
              const imageData = await fs.promises.readFile(imagePath);

              const imgCover = imageData.toString('base64');
              // @ts-ignore
              products.imageCoverData = imgCover;
            } catch (err) {
              res.json({ status: 'fail' });
              return;
            }

            const colors = [];

            for (let i = 2; i <= v.length; i++) {
              
              if (v[i] !== undefined) {
                colors.push(v[i]);
              }
            }
            // @ts-ignore
            items.push([products, v[1], colors]);
          }
          value.items = items;
          data.push(value);
        }
      }

      res.json({ status: 'success', data: data });
      return;
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const deleted = await orderobject.deleteorder(parseInt(req.params.id));
      if (deleted) {
        res.json({ status: 'success' });
        return;
      }
      res.status(400);
      res.json({ status: 'fail' });
      return;
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };

  updateorderstatus = async (req: Request, res: Response) => {
    try {
      const updated = await orderobject.updateorderstatus(
        parseInt(req.body.id),
        req.body.status
      );
      if (updated) {
        res.json({ status: 'success' });
        return;
      }
      res.status(400);
      res.json({ status: 'fail' });
      return;
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };

  create = async (req: Request, res: Response) => {
    try {

      const orderquery: order = {
        userinfo: req.body.userinfo,
        user_id: parseInt(req.body.userid),
        address: req.body.address,
        items: req.body.items,
        order_status: req.body.status,
        price: req.body.price
      };

      const neworder = await orderobject.create(orderquery);
      if (neworder) {
        
        res.json({ status: 'success', data: neworder });
        return;
      }
      res.json({ status: 'fail' });
      return;
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };
}
