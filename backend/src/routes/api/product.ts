import express from 'express';
import Productcontroller from '../../controller/product';
import ProductServicesController from '../../controller/services/product';
// import verify from  '../../authorization/middelware/jwtmiddelware';
import uploadImageController from '../../authorization/middelware/imageupload';

const productcontroller = new Productcontroller();
const productcontrollerservices = new ProductServicesController();
const products: express.Router = express.Router();
const UploadImageController = new uploadImageController();

products.get('/newclothes', productcontroller.newclothes);
products.get('/:id', productcontroller.show);
products.get('/', productcontroller.index);
products.get('/mostpopular', productcontrollerservices.mostpopular);
products.get('/productcate/:cate', productcontrollerservices.getproductsbycate);
products.post('/delete/:id', productcontroller.delete);
products.put(
  '/update',
  UploadImageController.uploadMultimages,
  UploadImageController.resizeimage,
  productcontroller.update
);
products.post(
  '/',
  UploadImageController.uploadMultimages,
  UploadImageController.resizeimage,
  productcontroller.create
);
products.post('/addcomment', productcontroller.createcomment);
products.get('/showcomments/:id', productcontroller.getproductcomments);
products.get('/showproductstars/:id', productcontroller.getproductstars);

export default products;
