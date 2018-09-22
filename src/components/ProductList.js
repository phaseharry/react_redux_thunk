import React from 'react';
import faker from 'faker'
import {connect} from 'react-redux'
import ConnectedProduct from './Product'
import store, {createThunk} from '../store'

class ProductList extends React.Component{
    constructor(){
        super()
        this.createProduct = this.createProduct.bind(this)
    }
    createProduct(){
        const newProduct = { name: faker.commerce.productName(), rating: faker.random.number(10)}
        this.props.createProduct(newProduct)
    }
    render(){
       return (
           <div>
               <button onClick={this.createProduct}>Create Product</button>
                <ul>
                    {this.props.products.map((product) => <ConnectedProduct info={product} key={product.id}/>)}
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
        createProduct: (product) => dispatch(createThunk(product))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
