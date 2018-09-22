import React from 'react'
import {connect} from 'react-redux'
import faker from 'faker'
import { createThunk, deleteThunk } from '../store'
import Product from './Product'

class ProductList extends React.Component{
    constructor(){
        super()
        this.createProduct = this.createProduct.bind(this)
    }
    createProduct(){
        const newProduct = { name: faker.commerce.productName(), rating: faker.random.number(10)}
        this.props.create(newProduct)
    }
    render(){
        const {products} = this.props
        return(
            <div>
                <button onClick={this.createProduct}>Create Product</button>
                <ul>
                    {products.map((product) => <Product key={product.id} info={product}/>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create: (item) => dispatch(createThunk(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)