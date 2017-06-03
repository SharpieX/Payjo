/**
 * Created by sharpie on 02/06/17.
 */
import React, {Component} from 'react';
class ProductInfo extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    add(e) {
        e.preventDefault();
        this.props.onRowAdd(this.state)
        this.refs.form.reset();
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Add Product
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <form onSubmit={this.add.bind(this)} ref="form">
                                <div className="row">
                                    <div className="form-group col-xs-4 col-md-4 ">
                                        <label className="control-label">
                                            Description
                                        </label>
                                        <input type="text" className="form-control" id="name" name="name"
                                               onChange={this.handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-xs-4 col-md-4 ">
                                        <label className="control-label">
                                            Price
                                        </label>
                                        <input type="text" className="form-control" id="price" name="price"
                                               onChange={this.handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-xs-4 col-md-4 ">
                                        <label className="control-label">
                                            Quantity
                                        </label>
                                        <input type="number" className="form-control" id="quantity" name="qty"
                                               onChange={this.handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-xs-4 col-md-4 ">
                                        <label className="control-label">
                                            Category
                                        </label>
                                        <input type="text" className="form-control" id="category" name="category"
                                               onChange={this.handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-xs-4 col-md-4 ">
                                        <label className="control-label">
                                            Remarks
                                        </label>
                                        <textarea type="text" className="form-control" id="description" name="desc"
                                                  onChange={this.handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success pull-left">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfo;