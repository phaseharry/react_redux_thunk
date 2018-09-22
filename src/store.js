import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'

//action types 
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
//action creators
export const loadProducts = products => ({type: LOAD_PRODUCTS, products})
export const createProduct = product => ({type: CREATE_PRODUCT, product})
export const deleteProduct = id => ({type: DELETE_PRODUCT, id})

export const loadingThunk = () => {
  return async (dispatch) => {
    const products = await axios.get('/api/products'); 
    dispatch(loadProducts(products.data))
  }
}
export const createThunk = (product) => {
  return async(dispatch) => {
    const newProduct = await axios.post('/api/products', product);
    dispatch(createProduct(newProduct.data))
  }
}

export const deleteThunk = (id) =>{
  return async (dispatch) => {
    await axios.delete(`/api/products/${id}`)
    dispatch(deleteProduct(id))
  }
}

const initialState = {products: []}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case DELETE_PRODUCT:
          return {...state, products: state.products.filter((product) => product.id !== action.id)}
        case LOAD_PRODUCTS:
          return {...state, products: action.products}
        case CREATE_PRODUCT: 
          return {...state, products: [...state.products, action.product]}
        default:    
          return state 
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store