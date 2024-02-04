import multer, { memoryStorage } from 'multer';
import { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default class uploadImageController {
  uploadSingleImage(fieldName: string) {
    const multerStorage = memoryStorage();
    const multerFilter = (_req: any, file: any, cb: any) => {
      if (file.mimetype.startsWith('image')) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    };
    const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
    return upload.single(fieldName);
  }

  uploadimage = this.uploadSingleImage('image');

  // ___________________________________(0-0)______________________________________

  uploadMultiImage() {
    const multerStorage = memoryStorage();

    const multerFilter = (_req: any, file: any, cb: any) => {
      if (file.mimetype.startsWith('image')) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    };
    const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
    return upload.fields([
      { name: 'images', maxCount: 5 },
      { name: 'imageCover', maxCount: 1 }
    ]);
  }

  uploadMultimages = this.uploadMultiImage();

  resizeimage = async (req: Request, res: Response, next: any) => {
    try {
      if (!req.files && !req.file) {
        res.json({ status: 'unallowed' });
        return;
      }

      if (!req.body.type) {
        res.json({ status: 'No type' });
        return;
      }

      const allowedMImageTypes = ['categories', 'brands', 'products'];
      if (!allowedMImageTypes.includes(req.body.type)) {
        res.json({ status: 'unallowed type' });
        return;
      }
      const pathimg = path.resolve(__dirname, `../../uploads/${req.body.type}`);
      if (req.file) {
        const ext = req.file.mimetype.split('/')[1];
        const filename = `${req.body.type}-${uuidv4()}-${Date.now()}.${ext}`;

        await sharp(req.file.buffer).toFile(
          path.resolve(pathimg, `${filename}`)
        );

        req.body.filename = filename;
        next();
        return;
      }

      // @ts-ignore
      if (req.files.imageCover) {
        // @ts-ignore
        const ext = req.files.imageCover[0].mimetype.split('/')[1];
        const imageCoverFilename = `products-${uuidv4()}-${Date.now()}-cover.${ext}`;
        // @ts-ignore
        await sharp(req.files.imageCover[0].buffer).toFile(
          path.resolve(pathimg, `${imageCoverFilename}`)
        );

        req.body.imageCover = imageCoverFilename;
      }

      req.body.images = [];

      // @ts-ignore
      if (req.files.images) {
        await Promise.all(
          // @ts-ignore
          req.files.images.map(async (img, index) => {
            const ext = img.mimetype.split('/')[1];
            const filename = `products-${uuidv4()}-${Date.now()}-${
              index + 1
            }.${ext}`;

            await sharp(img.buffer).toFile(
              path.resolve(pathimg, `${filename}`)
            );

            req.body.images.push(filename);
          })
        );
      }
      next();
    } catch (err) {
      console.error(err);
      res.status(400);
      res.json({ status: 'fail' });
      return;
    }
  };
}
