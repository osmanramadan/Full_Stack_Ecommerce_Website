import express from 'express';
import Categorycontroller from '../../controller/category';
import uploadImageController from '../../authorization/middelware/imageupload';

const CategoryController = new Categorycontroller();
const UploadImageController = new uploadImageController();
const category: express.Router = express.Router();

category.get('/', CategoryController.index);
category.post(
  '/addcategory',
  UploadImageController.uploadimage,
  UploadImageController.resizeimage,
  CategoryController.addcategory
);
category.delete('/deletecategory', CategoryController.deletecategory);

export default category;
