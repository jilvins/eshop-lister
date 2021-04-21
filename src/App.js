
import './App.css';
import Header from './components/Heder.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login.js'
import Register from './components/Register.js'
import AddProduct from './components/AddProduct.js'
import UpdateProduct from './components/UpdateProduct.js'
import Protected from './components/Protected.js'
import ProductList from './components/ProductList.js'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/add">
        <Protected Cmp={AddProduct} />
        {/*<AddProduct />*/}
      </Route>
      <Route path="/update">
      <Protected Cmp={UpdateProduct} />
        {/*<UpdateProduct />*/}
      </Route>
      <Route path="/">
        <Protected Cmp={ProductList} />
        {/*<ProductList />*/}
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
