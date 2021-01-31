import './App.css';
import Header from './Header/Header'
import Home from './Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import {auth} from './firebase';
import Payment from'./Payment/Payment'
import React,{useEffect} from 'react'
import {useStateValue} from './StateProvider/StateProvider'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';
import Order from './Order/Order';
const promise = loadStripe(
  'pk_test_51I1GGyBZkh01ATE4FlPkxk1sKQXOewDaE7vzRGQR45RJSb9xB7oVszI799vJSnb3pakkgAYSUozhHF6cFb9Q70iu001mxpW2qc'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
     
    <Router>
       <div className="App">
         <Switch>
          <Route path="/orders">
            <Header />
            <Orders />          
            </Route>
          <Route path="/login"> 
          <Login/>
          </Route>
          <Route path="/payment"> 
          <Elements stripe={promise}>
          <Payment/>
          </Elements>                   
          </Route>
          <Route path="/checkout">
             <Header />
             <Checkout />
           </Route>
          <Route path="/">
         <Header/>
        <Home/>
        </Route>
        </Switch>
    </div> 
    </Router>
   
  );
}


export default App;
