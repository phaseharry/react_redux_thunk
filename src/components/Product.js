import React from 'react'
import { connect } from 'react-redux'
import {deleteThunk} from '../store'

class Product extends React.Component{
    render(){
        const {rating, name, id} = this.props.info
        const history = this.props.history
        console.log(history)
        return (
            <div>
                <li>{name} {rating}<button onClick={() => this.props.delete(id, history)}>X</button></li>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        delete: (id, history) => dispatch(deleteThunk(id, history))
    }
}

export default connect(null, mapDispatchToProps)(Product)