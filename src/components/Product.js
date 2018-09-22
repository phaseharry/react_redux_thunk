import React from 'react';
import { connect } from 'react-redux';
import {deleteThunk} from '../store'

const Product = props => {
    const {name, rating, id} = props.info

    return (
        <li>{name} {rating}
            <button onClick={() => props.deleteProduct(id)}>X</button>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (id) => dispatch(deleteThunk(id))
    }
}

const ConnectedProduct = connect(null, mapDispatchToProps)(Product)

export default ConnectedProduct