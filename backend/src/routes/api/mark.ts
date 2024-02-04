import express from 'express';
import Markcontroller from '../../controller/brand';
import uploadImageController from '../../authorization/middelware/imageupload';

const MarkController = new Markcontroller();
const mark: express.Router = express.Router();
const UploadImageController = new uploadImageController();

mark.get('/', MarkController.index);
mark.post(
  '/addmark',
  UploadImageController.uploadimage,
  UploadImageController.resizeimage,
  MarkController.addmark
);
mark.delete('/deletemark', MarkController.deletemark);

export default mark;
