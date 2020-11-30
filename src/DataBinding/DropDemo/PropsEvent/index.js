import React, { Component } from 'react'
import ProductList from './ProductList'

export  class PropsEvent extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modelId" >ADD (0)</button>
                </div>
                <ProductList/>
            </div>
        )
    }
}

export default PropsEvent;