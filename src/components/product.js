/**
 * Created by sharpie on 02/06/17.
 */
import React, {Component} from 'react';
import Search from './search';
import ProductTable from './productTable';

class Products extends Component {
    render() {
        var update = this.props.onProductTableUpdate;
        var rowDelete =this.props.onRowDel;
        var userInout = this.props.onUserInput;

        return (
            <div>
                <Search filterText={this.props.filterText} onUserInput={userInout.bind(this)}/>
                <ProductTable onProductTableUpdate={update.bind(this)}
                              onRowDel={rowDelete.bind(this)}
                              products={this.props.products} filterText={this.props.filterText}/>
            </div>
        );
    }

}

export default Products;


