import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import ProductList from './ProductList'
import Product from './Product'
import {loadingThunk} from '../store'

class Main extends React.Component{
    componentDidMount(){
        this.props.loadProducts();
    }
    render(){
        const {products} = this.props;
        const singleProduct = (id) => {
            console.log(id)
            const product = products.find((product) => {
                console.log(product)
                return product.id === id
            })
            console.log(products)
            console.log(product)
            return product? product : {}
        }
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path='/products/:id' render={(props) => <Product info={singleProduct(props.match.params.id)}/>} />
                    <Route path='/products' Component={ProductList} />
                </Switch>
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
        loadProducts: () => dispatch(loadingThunk())
    }
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main)
export default ConnectedMain
