import { Request, Response } from 'express';
import { User } from '../model/user';
import { Address } from '../model/address';

const userobject = new User();
const addressobject = new Address();

export default class Addresscontroller {
  addaddress = async (req: Request, res: Response) => {
    try {
      const existemail = await userobject.emailExists(req.body.email);
      if (existemail) {
        const re = await addressobject.adduseraddress(
          req.body.email,
          req.body.addrtitle,
          req.body.addrdetails,
          req.body.phone
        );
        if (re) {
          res.json({ status: 'success' });
          return;
        } else {
          res.json({ status: 'fail' });
          return;
        }
      } else {
        res.json({ status: 'email fail' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };

  viewuseraddress = async (req: Request, res: Response) => {
    try {
      const existemail = await userobject.emailExists(
        req.params.email as string
      );
      if (existemail) {
        const data = await addressobject.viewuseraddress(
          req.params.email as string
        );
        if (data) {
          res.json({ status: 'success', data: data });
          return;
        } else {
          res.json({ status: 'no addr' });
          return;
        }
      } else {
        res.json({ status: 'email fail' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };

  deleteuseraddress = async (req: Request, res: Response) => {
    try {
      
      const data = await addressobject.deleteuseraddress(req.body.id);
      

      if (data) {
        res.json({ status: 'success' });
        return;
      } else {
        res.json({ status: 'fail' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };
  updateuseraddress = async (req: Request, res: Response) => {
    try {
      const data = await addressobject.updateuseraddress(
        req.body.addrtitle,
        req.body.addrdetails,
        req.body.phone,
        req.body.id
      );

      if (data) {
        res.json({ status: 'success' });
        return;
      } else {
        res.json({ status: 'error' });
        return;
      }
    } catch (err) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };
}
