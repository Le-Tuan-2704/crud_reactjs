import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./Home";
import editProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import Product from "./Product";
 
class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/add-product' component={AddProduct}/>
                    // Mình thêm sẵn 2 Router eidt-Product và Product luôn, tại lát nữa cũng sẽ dùng tới
                    <Route exact path='/edit-product/:id' component={editProduct}/> 
                    <Route exact path='/product' component={Product}/>
                </Switch>
            </main>
        )
    }
}
 
export default RouterPath;