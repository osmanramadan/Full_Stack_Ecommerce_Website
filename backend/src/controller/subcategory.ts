import { Request, Response } from 'express';
import { subcategory } from '../types/subcategory';
import { SubCategory } from '../model/subcategory';

const subcategoryobject = new SubCategory();

export default class SubCategorycontroller {
  addsubcategory = async (req: Request, res: Response) => {
    try {
      
      const subcategory: subcategory = {
        name: req.body.name,
        maincat: req.body.maincat
      };

      const subexist = await subcategoryobject.checksubcategoryexist(
        req.body.name
      );

      if (subexist) {
        res.json({ status: 'subcate error' });
        return;
      }

      const exist = await subcategoryobject.checkcategoryexist(
        req.body.maincat
      );

      if (!exist) {
        res.json({ status: 'cate error' });
        return;
      }

      const result = await subcategoryobject.create(subcategory);
      if (result) {
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

  viewsubcategories = async (_req: Request, res: Response) => {
    try {
      const result = await subcategoryobject.index();
      if (result) {
        res.json({ status: 'success', data: result });
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

  deletesubcategory = async (req: Request, res: Response) => {
    try {
      const result = await subcategoryobject.deletesubcategory(req.body.id);

      if (result) {
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
