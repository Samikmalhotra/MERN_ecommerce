import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import { login } from './actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    var x =(localStorage.getItem('userInfo'))
    var y = JSON.parse(x);
  },[])

      return (
        <Router>
          <Header />
          <main className='py-3'>
            <Container>
              <Route path='/login' component={LoginScreen}></Route>
              <Route path='/register' component={RegisterScreen}></Route>
              <Route path='/profile' component={ProfileScreen}></Route>
              <Route path='/payment' component={PaymentScreen }></Route>
              <Route path='/placeorder' component={PlaceOrderScreen }></Route>
              <Route path='/order/:id' component={OrderScreen}></Route>
              <Route path='/shipping' component={ShippingScreen}></Route>
              <Route exact path='/' component={HomeScreen}></Route>
              <Route exact path = '/page/:pageNumber' component={HomeScreen}/>
              <Route exact path = '/search/:keyword/page/:pageNumber' component={HomeScreen}/>
              <Route exact path='/search/:keyword' component={HomeScreen}></Route>
              <Route path='/product/:id' component={ProductScreen}></Route>
              <Route path='/cart/:id?' component={CartScreen}></Route>
              <Route path='/admin/userlist' component={UserListScreen}></Route>
              <Route path='/admin/user/:id/edit' component={UserEditScreen}></Route>
              <Route path='/admin/product/:id/edit' component={ProductEditScreen}></Route>
              <Route exact path='/admin/productlist' component={ProductListScreen}></Route>
              <Route exact path='/admin/productlist/:pageNumber' component={ProductListScreen}></Route>
              <Route path='/admin/orderlist' component={OrderListScreen}></Route>
            </Container>
            </main>
      <Footer />
    </Router>
  )
}

export default App
