import express from 'express';
import SubCategorycontroller from '../../controller/subcategory';

const SubCategoryController = new SubCategorycontroller();
const subcategory: express.Router = express.Router();

subcategory.get('/', SubCategoryController.viewsubcategories);
subcategory.post('/addsubcategory', SubCategoryController.addsubcategory);
subcategory.delete(
  '/deletesubcategory',
  SubCategoryController.deletesubcategory
);

export default subcategory;
