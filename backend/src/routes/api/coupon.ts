import express from 'express';
import Couponcontroller from '../../controller/coupon';

const CouponController = new Couponcontroller();
const coupon: express.Router = express.Router();

coupon.get('/', CouponController.index);
coupon.get('/:name', CouponController.show);
coupon.post('/addcoupon', CouponController.addcoupon);
coupon.post('/deletecoupon', CouponController.deletecoupon);
coupon.put('/updatecoupon', CouponController.updatecoupon);

export default coupon;
