import React from 'react';
import ProtectedRoute from './compenents/Utility/protectedroute';
import Homepage from './compenents/Homepage/homepage';
import Allcategories from './compenents/Categories/allcategories';
import Allbrands from './compenents/Brands/allbrands';
import Navbarpage from './compenents/Homepage/navbar';
import Productsview from './compenents/Products/products';
import Productdetails from './compenents/Products/productdetails';
import Paymethod from './compenents/Order/paymethod';
import Register from './compenents/Login/register';
import Footer from './compenents/Homepage/footer';
import Cart from './compenents/Cart/cart';
import PayCash from './compenents/payment/paycash';
import PayCreditCard from './compenents/payment/paycreditcard';
import Login from './compenents/Login/login';

import Allorders from './compenents/User/allorders';
import Favoriteproducts from './compenents/User/favoriteproducts';
import Profile from './compenents/User/profile';
import Addresses from './compenents/User/address/addresses';
import AddAddress from './compenents/User/address/addaddress';
import UpdateAddress from './compenents/User/address/updateaddress';
import DeleteAddress from './compenents/User/address/deleteaddress';
import Forgetpassword from './compenents/User/forgetpassword';
import Verifypassword from './compenents/User/verifypassword';
import Resetpassword from './compenents/User/resetpassword';
import Allproducts from './compenents/Admin/allproducts';
import Manageorders from './compenents/Admin/manageorders';
import OrderDetails from './compenents/Admin/orderdetails';
import Addbrand from './compenents/Admin/addbrand';
import Addcategory from './compenents/Admin/addcategory';
import Addsubcategory from './compenents/Admin/addsubcategory';
import Addproduct from './compenents/Admin/addproduct';
import AddCoupon from './compenents/Admin/addcoupon';
import Updateproduct from './compenents/Admin/updateproduct';
import UpdateCoupon from './compenents/Admin/updatecoupon';
import { Routes, Route } from 'react-router-dom';
import Notfound from './compenents/Utility/notfound';
import ProtectedRouteHook from './hooks/auth/protectedRoutedHook';

function App() {
  const [isUser, isAdmin, _userData] = ProtectedRouteHook();

  return (
    <div>
      <Navbarpage />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="*" element={<Notfound />} />
        <Route exact path="/allcategory" element={<Allcategories />} />
        <Route exact path="/allbrands" element={<Allbrands />} />
        <Route exact path="/products" element={<Productsview />} />
        <Route exact path="/product" element={<Productdetails />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/user/forgetpassword" element={<Forgetpassword />} />
        <Route exact path="/user/verifycode" element={<Verifypassword />} />
        <Route exact path="/user/resetpassword" element={<Resetpassword />} />

        <Route element={<ProtectedRoute auth={isUser} />}>
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order/paymethod" element={<Paymethod />} />
          <Route exact path="/order/paycash" element={<PayCash />} />
          <Route
            exact
            path="/order/paycreditcard"
            element={<PayCreditCard />}
          />
          <Route exact path="/user/allorders" element={<Allorders />} />
          <Route
            exact
            path="/user/favoriteproducts"
            element={<Favoriteproducts />}
          />
          <Route exact path="/user/profile" element={<Profile />} />
          <Route exact path="/user/addresses" element={<Addresses />} />
          <Route exact path="/user/addAddress" element={<AddAddress />} />
          <Route exact path="/user/updateAddress" element={<UpdateAddress />} />
          <Route exact path="/user/deleteAddress" element={<DeleteAddress />} />
        </Route>

        <Route element={<ProtectedRoute auth={isAdmin} />}>
          <Route exact path="/admin/allproducts" element={<Allproducts />} />
          <Route exact path="/admin/manage-orders" element={<Manageorders />} />
          <Route exact path="/admin/add-brand" element={<Addbrand />} />
          <Route exact path="/admin/add-category" element={<Addcategory />} />
          <Route
            exact
            path="/admin/add-subCategory"
            element={<Addsubcategory />}
          />
          <Route exact path="/admin/add-product" element={<Addproduct />} />
          <Route exact path="/admin/add-coupon" element={<AddCoupon />} />
          <Route
            exact
            path="/admin/update-product"
            element={<Updateproduct />}
          />
          <Route exact path="/admin/update-coupon" element={<UpdateCoupon />} />
          <Route exact path="/admin/order" element={<OrderDetails />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
