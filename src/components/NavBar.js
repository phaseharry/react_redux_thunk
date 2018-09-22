import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {
    render(){
        const products = this.props.products
        return (     
            <ul>
                <li><Link to='/products'>Products ({products.length})</Link></li>
                <li><Link to={`/products/${2}`}>Top Rated</Link></li>
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(NavBar)