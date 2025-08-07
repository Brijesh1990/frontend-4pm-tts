import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Food delivery web app user panel
import Layout from './Layout'
import ContactUs from './components/customer/pages/ContactUs'
import Products from './components/customer/pages/Products'
import ProductsDetails from './components/customer/pages/ProductsDetails'
import AboutUs from './components/customer/pages/About'
import Account from './components/customer/pages/Account'
import Register from './components/customer/pages/Register'
import ForgetPassword from './components/customer/pages/ForgetPassword'
import CartApp from './components/customer/pages/CartApp'
import PageNotFound from './components/customer/pages/PageNotFound'
// Food delivery web app admin panel
import Login from './components/admin/Login'
import AdminLayout from './AdminLayout'
import ManageCustomers from './components/admin/ManageCustomers'  
import AddCategory from './components/admin/AddCategory'
import AddFruits from './components/admin/AddFruits'
// import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* user & admin panel routing */}
 <Router>
  <Routes>
    {/* customers panel Routing */}
    <Route path="/" element={<Layout />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products-details" element={<ProductsDetails />} />
    <Route path="/create-account" element={<Account />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    <Route path="/cart" element={<CartApp />} />
    <Route path="*" element={<PageNotFound />} />
    {/* admin panel routing */}
    <Route path="/admin-login" element={<Login />} />
    <Route path="/admin-login/dashboard" element={<AdminLayout />} />
    <Route path="/admin-login/manage-customers" element={<ManageCustomers />} />
    <Route path="/admin-login/add-category" element={<AddCategory />} />
    <Route path="/admin-login/add-fruits" element={<AddFruits />} />

  </Routes>
 </Router>
  
  </StrictMode>,
)
