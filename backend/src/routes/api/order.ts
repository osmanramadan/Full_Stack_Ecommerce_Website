import express from 'express';
import Ordercontroller from '../../controller/order';
// import OrderServicesController from '../../controller/services/order';
import verify from '../../authorization/middelware/jwtmiddelware';
const ordercontroller = new Ordercontroller();
// const ordercontrollerservices = new OrderServicesController();
const orders: express.Router = express.Router();

orders.get('/:userid', ordercontroller.show);
orders.get('/', ordercontroller.index);
// orders.get('/active/:userid', verify, ordercontrollerservices.useractiveorders);
// orders.get('/complete/:userid', verify, ordercontrollerservices.usercompleteorders);
orders.post('/', ordercontroller.create);
orders.put('/', ordercontroller.updateorderstatus);
// orders.post('/addproductsorder', verify, ordercontroller.addproductsorder);
orders.delete('/:id', ordercontroller.delete);
// orders.put('/updateorderstatus', verify, ordercontroller.updateorderstatus);
// orders.put('/updateproductsoforder', verify, ordercontroller.updateproductsoforder);

export default orders;
