import { Request, Response } from 'express';
import { coupon } from '../types/coupon';
import { Coupon } from '../model/coupon';

const couponobject = new Coupon();

export default class Couponcontroller {
  addcoupon = async (req: Request, res: Response) => {
    try {
      const coupon: coupon = {
        name: req.body.name,
        discount: req.body.discount,
        expire: req.body.expire
      };

      const exist = await couponobject.checkcouponexist(req.body.name);

      if (exist) {
        res.json({ status: 'exist' });
        return;
      }

      const re = await couponobject.create(coupon);
      if (re) {
        res.json({ status: 'success' });
        return;
      } else {
        res.json({ status: 'fail' });
        return;
      }
    } catch (err) {
      res.json({ status: 'fail' });
      return;
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const checkexist = await couponobject.checkcouponexist(req.params.name);
      if (checkexist) {
        const coupon = await couponobject.show(req.params.name);

        if (coupon) {
          res.json({ status: 'success', data: coupon });
          return;
        }

        res.json({ status: 'fail' });
        return;
      } else {
        res.json({ status: 'notfound' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };
  index = async (_req: Request, res: Response) => {
    try {
      const coupons = await couponobject.index();

      if (coupons) {
        res.json({ status: 'success', data: coupons });
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

  deletecoupon = async (req: Request, res: Response) => {
    try {
      const re = await couponobject.deletecoupon(req.body.id);

      if (re) {
        res.json({ status: 'success' });
        return;
      } else {
        res.json({ status: 'fail' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };

  updatecoupon = async (req: Request, res: Response) => {
    try {
      const coupon: coupon = {
        id: req.body.id,
        name: req.body.name,
        discount: req.body.discount,
        expire: req.body.expire
      };
      const re = await couponobject.updatecoupon(coupon);

      if (re) {
        res.json({ status: 'success' });
        return;
      } else {
        res.json({ status: 'fail' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };
}
