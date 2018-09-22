import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends React.Component{

    render(){
        const sortedArr = this.props.products.slice().sort((a, b) => b.rating - a.rating)
        const highestRated = sortedArr[0] || {}
        return(
            <ul>
                <li><Link to='/products'> Products ({this.props.products.length})</Link></li>
                <li><Link to={`/products/${highestRated.id}`}>Top Rated ({highestRated.name})</Link></li>
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