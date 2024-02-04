// import { Request, Response } from 'express';
// import { Orderservices} from '../../model/services/order';

// const ordersservices = new Orderservices();

// export default class OrderServicesController {
//     useractiveorders=async (req:Request, res:Response)=>{
//         try {
//             const orders = await ordersservices.checkstatus(parseInt(req.params.userid), 'active');
//             res.json(orders);

//         } catch (e) {
//             res.status(400);
//             res.json({'status':'fail'});
//         }

//         }

//     usercompleteorders=async (req:Request, res:Response)=>{
//         try {
//             const orders = await ordersservices.checkstatus(parseInt(req.params.userid), 'complete');
//             res.json(orders);

//         } catch (e) {
//             res.status(400);
//             res.json({'status':'fail'});
//         }

//         }
// }
