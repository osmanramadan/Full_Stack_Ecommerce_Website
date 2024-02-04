import { Request, Response } from 'express';
import { Mark } from '../model/brand';
import { mark } from '../types/mark';
import fs from 'fs';
import path from 'path';

const markobject = new Mark();

export default class Markcontroller {

  addmark = async (req: Request, res: Response) => {
    try {
      const mark: mark = {
        name: req.body.name,
        image: req.body.filename
      };

      const exist = await markobject.checkbrandexist(req.body.name);

      if (exist) {
        res.json({ status: 'exist' });
        return;
      }

      const re = await markobject.create(mark);
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

  index = async (_req: Request, res: Response) => {
    try {
      const data: any = [];
      const brands = await markobject.index();

      if (brands) {
        for (const value of brands) {
          const imagePath = path.join(
            __dirname,
            '../uploads/brands',
            value.image!
          );

          try {
            const imageData = await fs.promises.readFile(imagePath);

            const imgData = {
              imageData: 'data:image/*;base64,' + imageData.toString('base64')
            };

            data.push({ ...imgData, ...value });
          } catch (err: any) {}
        }

        res.json({ status: 'success', data: data });
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

  deletemark = async (req: Request, res: Response) => {
    try {
      const re = await markobject.deletemark(req.body.id);

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
