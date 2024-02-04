import { Request, Response } from 'express';
import { category } from '../types/category';
import { Category } from '../model/category';
import fs from 'fs';
import path from 'path';

const categoryobject = new Category();

export default class Categorycontroller {
  addcategory = async (req: Request, res: Response) => {
    try {
      const category: category = {
        name: req.body.name,
        image: req.body.filename
      };

      const exist = await categoryobject.checkcategoryexist(req.body.name);
      if (exist) {
        res.json({ status: 'exist' });
        return;
      }
      const re = await categoryobject.create(category);
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

  viewcategories = async (_req: Request, res: Response) => {
    try {
      const re = await categoryobject.index();
      if (re) {
        res.json({ status: 'success', data: re });
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

  index = async (_req: Request, res: Response) => {
    try {
      const categories = await categoryobject.index();
      const data: any = [];

      if (categories) {
        for (const value of categories) {
          const imagePath = path.join(
            __dirname,
            '../uploads/categories',
            value.image!
          );

          try {
            const imageData = await fs.promises.readFile(imagePath);

            const imgData = { imageData: imageData.toString('base64') };

            data.push({ ...imgData, ...value });
          } catch (err: any) {}
        }

        res.json({ status: 'success', data: data });
        return;
      }
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };

  deletecategory = async (req: Request, res: Response) => {
    try {
      const re = await categoryobject.deletecategory(req.body.id);

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
