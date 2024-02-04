import express from 'express';
import Addresscontroller from '../../controller/address';
import verify from '../../authorization/middelware/jwtmiddelware';

const AddressController = new Addresscontroller();
const addresses: express.Router = express.Router();

addresses.get('/viewuseraddress/:email', AddressController.viewuseraddress);
addresses.post('/addaddress', AddressController.addaddress);
addresses.post('/deleteaddress', AddressController.deleteuseraddress);
addresses.put('/updateaddress', AddressController.updateuseraddress);

export default addresses;
