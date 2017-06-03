/**
 * Created by sharpie on 02/06/17.
 */

import React, {Component} from 'react';

class Search extends Component {
    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="form-group col-xs-4 col-md-4 ">
                            <input type="text" placeholder="Search Product" value={this.props.filterText} ref="filterTextInput"
                                   onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                </form>
            </div>

        );
    }

}

export default Search;
