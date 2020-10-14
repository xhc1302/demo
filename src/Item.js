import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    render() { 
        console.log('child-render')
        return ( 
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
         );
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    
    }
    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}

Item.propTypes = {
    content: PropTypes.string,
}
 
export default Item;