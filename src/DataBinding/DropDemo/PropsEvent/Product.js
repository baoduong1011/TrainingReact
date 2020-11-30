import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {prod,onViewDetail,onAddToCart} = this.props;
        return (
            <div className="col-4">
            <div className="card">
                <img className="card-img-top" style={{height:'400px'}} src={prod.hinhAnh} alt />
                <div className="card-body text-center">
                    <h4 className="card-title">{prod.tenSP}</h4>
                    <p className="card-text">{prod.giaBan}</p>
                    <button className="btn btn-success"   
                        onClick={() => {
                            onViewDetail(prod);
                        }}
                    >Confirm</button>

                    <button className="btn btn-danger"
                    onClick={() => {
                        onAddToCart(prod);
                    }}
                    >Add Product</button>
                </div>
            </div>
        </div>
        )
    }
}
