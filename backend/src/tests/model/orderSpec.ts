// import { User } from '../../model/user';
// import { Order } from "../../model/order";
// import { Product } from "../../model/product";

// const order = new Order();
// const user = new User();
// const product = new Product();

// describe("#################### Order Model ##################", ()=>{

// beforeAll(async ()=>{
//     await user.create({firstname:'ahmed', lastname:'os', upassword:'123'});
//     await user.create({firstname:'mk', lastname:'os', upassword:'123'});
//     await product.create({Pname:"test", price:'44', category:'caye'});
//     await order.create({user_id:1, order_status:"active"});

// }
// );

// describe(":::::::::: queries:", ()=>{

//     it("create order:", async ()=>{
//         const record = await order.create({user_id:1, order_status:"active"});
//         expect(record).toBeDefined;
//         });

//     it("select by user id:", async ()=>{
//         const record = await order.show(1);
//         expect(record).toBeDefined;
//         });

//     it("delete by order id:", async ()=>{
//     const record = await order.deleteorder(1);
//     expect(record).toBeDefined;
//     });

//     it("update order status by id:", async ()=>{
//     const updaterecord = await order.updateorderstatus('complete', 1);
//     expect(updaterecord).toBeDefined;
//     });
//     it("add products to order:", async ()=>{
//     const record = await order.addproductsto_order({order_id:2, product_id:1, quantity:4});

//     expect(record).toBeDefined;

//     });

// }
// );});
