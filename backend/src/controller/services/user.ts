import { Request, Response } from 'express';
import { Userservices } from '../../model/services/user';

const userservices = new Userservices();
export default class UserServicesController {
  userpurchases = async (req: Request, res: Response) => {
    try {
      const purchases = await userservices.userpurchases(req.params.userid);

      res.json(purchases);
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };
}
