/**
 * Created by sharpie on 31/05/17.
 */

import React, {Component} from 'react';
import Products from './product';
import ProductInfo from './productInfo';

class AppComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.filterText = "";
        this.state.products = JSON.parse(localStorage.getItem('products')) || [];

    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };

    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(this.state.products));
        this.setState(this.state.products);
    };

    handleAddEvent(product) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(40);
        product.id = id
        this.state.products.push(product);
        localStorage.setItem('products', JSON.stringify(this.state.products));
        this.setState(this.state.products);
    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function (product) {

            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;

                }
            }
            return product;
        });
        this.setState({products: newProducts});
        localStorage.setItem('products', JSON.stringify(this.state.products));
    };

    render() {
        var divstyle = {
            marginTop:"100px"
        }

        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="top-nav">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container" style={divstyle}>
                    <div className="row">
                        <ProductInfo products={this.state.products} onRowAdd={this.handleAddEvent.bind(this)}/>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        Update Product Information
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <Products products={this.state.products}
                                              onUserInput={this.handleUserInput.bind(this)}
                                              onProductTableUpdate={this.handleProductTable.bind(this)}
                                              onRowDel={this.handleRowDel.bind(this)}
                                              filterText={this.state.filterText}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default AppComponent;
