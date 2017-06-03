/**
 * Created by sharpie on 02/06/17.
 */
import React, {Component} from 'react';
import ProductRow from './productRow';

class ProductTable extends Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function (product) {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            return (
                <ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)}
                            key={product.id}/>)
        });
        return (
                <div className="auto-scroll">
                    <table className="table table-bordered table-sortable">
                        <thead className="headerTable">
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {product}
                        </tbody>
                    </table>
            </div>
        );

    }

}
export default ProductTable;