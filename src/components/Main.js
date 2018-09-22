import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { HashRouter,Route, Switch } from 'react-router-dom'
import { loadingThunk } from '../store'
import ProductList from './ProductList'
import NavBar from './NavBar'
import Product from './Product';

class Main extends React.Component{
    constructor(){
        super()
        this.findById = this.findById.bind(this)
    }
    componentDidMount(){
        this.props.loadProducts()
    }
    findById(id){
        const product = this.props.products.find((product) => product.id === +id)
        return product? product : {}
    }
    render(){
       return ( 
        <div>
            <HashRouter>
                <div>
                    <NavBar />  
                    <Switch>
                        <Route exact path='/products' render={(props) => <ProductList {...props}/>}/>
                        <Route path='/products/:id' render={(props) => <Product {...props} info={this.findById(props.match.params.id)}/>} />
                    </Switch> 
                </div>
            </HashRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)