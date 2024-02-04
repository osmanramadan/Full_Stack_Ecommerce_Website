import { Request, Response } from 'express';
import { Product } from '../model/product';
import { product , prodComment } from '../types/product';
import fs from 'fs';
import path from 'path';

const productobject = new Product();

export default class Productcontroller {
  index = async (_req: Request, res: Response) => {
    try {
      const allproducts = await productobject.index();

      const data = [];

      if (allproducts) {
        for (const value of allproducts) {
          const imagePath = path.join(
            __dirname,
            '../uploads/products',
            value.coverimage
          );

          try {
            const imageData = await fs.promises.readFile(imagePath);
            const imgCover = { imageCoverData: imageData.toString('base64') };
            const imagesData = [];
            let rate = [];

            for (const img of value.images) {
              const imagePath = path.join(
                __dirname,
                '../uploads/products',
                img
              );
              const imageData = await fs.promises.readFile(imagePath);
              imagesData.push(imageData.toString('base64'));
            }

            const imgsData = { imagesData: imagesData };

            const stars = await productobject.getproductstars(value.id);

            // @ts-ignore
            if (stars[0].sumstar) {
              // @ts-ignore
              rate = stars[0].sumstar / stars[0].numstar;
            }
            const array_rate = { rate: rate };
            data.push({ ...imgCover, ...value, ...imgsData, ...array_rate });
          } catch (err) {
            res.json({ status: 'fail' });
            return;
          }
        }

        res.json({ status: 'success', data: data });
        return;
      }
      res.json({ status: 'success' });
      return;
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const data = [];
      const productbyid: any = await productobject.show(req.params.id);

      if (productbyid) {
        const imagePath = path.join(
          __dirname,
          '../uploads/products',
          productbyid.coverimage
        );

        try {
          const imageData = await fs.promises.readFile(imagePath);

          const imgCover = { imageCoverData: imageData.toString('base64') };
          const imagesData = [];
          let   rate = [];

          for (const img of productbyid.images) {
            const imagePath = path.join(__dirname, '../uploads/products', img);
            const imageData = await fs.promises.readFile(imagePath);
            imagesData.push(imageData.toString('base64'));
          }
          const imgsData = { imagesData: imagesData };
          const stars = await productobject.getproductstars(productbyid);

          // @ts-ignore
          if (stars[0].sumstar) {
            // @ts-ignore
            rate = stars[0].sumstar / stars[0].numstar;
          }
          const ratearr = { rate: rate };

          data.push({ ...imgCover, ...productbyid, ...imgsData, ...ratearr });
        } catch (err: any) {
          res.json({ status: 'fail' });
          return;
        }

        res.json({ data: data[0], status: 'success' });
        return;
      }

      res.json({ status: 'fail' });
      return;
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
    }
  };

  newclothes = async (_req: Request, res: Response) => {
    try {
      const items = await productobject.newclothes('ملابس');
      const data: any = [];

      if (items) {
        // @ts-ignore
        for (const value of items) {
          const imagePath = path.join(
            __dirname,
            '../uploads/products',
            value.coverimage
          );

          try {
            const imageData = await fs.promises.readFile(imagePath);

            const imgCover = { imageCoverData: imageData.toString('base64') };
            const imagesData = [];
            let rate = [];

            for (const img of value.images) {
              const imagePath = path.join(
                __dirname,
                '../uploads/products',
                img
              );
              const imageData = await fs.promises.readFile(imagePath);
              imagesData.push(imageData.toString('base64'));
            }
            const imgsData = { imagesData: imagesData };

            const stars = await productobject.getproductstars(value.id);

            // @ts-ignore
            if (stars[0].sumstar) {
              // @ts-ignore
              rate = stars[0].sumstar / stars[0].numstar;
            }
            const arrrate = { rate: rate };
            data.push({ ...imgCover, ...value, ...imgsData, ...arrrate });
          } catch (err: any) {
            res.json({ status: 'fail' });
            return;
          }
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

  delete = async (req: Request, res: Response) => {
    try {
      const deleted = await productobject.deleteproduct(req.params.id);
      if (deleted) {
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

  update = async (req: Request, res: Response) => {
    const subcategory = req.body.subcategory.split(',');
    const colors = req.body.colors.split(',');

    const data: product = {
      id: req.body.id,
      ptitle: req.body.ptitle,
      pdesc: req.body.pdesc,
      price: req.body.price,
      discount: req.body.discount,
      priceafterdiscount: req.body.priceafterdiscount,
      category: req.body.category,
      subcategory: subcategory,
      brand: req.body.brand,
      colors: colors,
      images: req.body.images,
      coverimage: req.body.imageCover
    };

    try {
      const updated = await productobject.updateproduct(data);

      if (updated) {
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

  create = async (req: Request, res: Response) => {
    try {
      const subcategory = req.body.subcategory.split(',');
      const colors = req.body.colors.split(',');

      const data: product = {
        ptitle: req.body.ptitle,
        pdesc: req.body.pdesc,
        price: req.body.price,
        discount: req.body.discount,
        priceafterdiscount: req.body.priceafterdiscount,
        category: req.body.category,
        subcategory: subcategory,
        brand: req.body.brand,
        colors: colors,
        images: req.body.images,
        coverimage: req.body.imageCover
      };

      const newproduct = await productobject.create(data);
      if (newproduct) {
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

  createcomment = async (req: Request, res: Response) => {
    try {
      const comment: prodComment = {
        prodid: req.body.prodId,
        username: req.body.username,
        text: req.body.text,
        stars: req.body.stars
      };

      const newcomment = await productobject.addComment(comment);
      if (newcomment) {
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

  getproductcomments = async (req: Request, res: Response) => {
    try {
      if (req.params.id) {
        const comments = await productobject.showcomments(req.params.id);
        if (comments) {
          res.json({ status: 'success', data: comments });
          return;
        } else {
          res.json({ status: 'fail' });
          return;
        }
      } else {
        res.json({ status: 'fail' });
        return;
      }
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };
  getproductstars = async (req: Request, res: Response) => {
    try {
      if (req.params.id) {
        const comments = await productobject.getproductstars(req.params.id);

        // @ts-ignore
        if (comments[0].sumstar) {
          res.json({ status: 'success', data: comments });
          return;
        } else {
          res.json({ status: 'fail' });
          return;
        }
      } else {
        res.json({ status: 'fail' });
        return;
      }
    } catch (e) {
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };
}
