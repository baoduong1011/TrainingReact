import React, { Component } from 'react'
import ProductRCC from './ProductRCC'
import ProductRFC from './ProductRFC'

export default class DemoDrop extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="iphone" price="$10" />
                    </div>
                    <div className="col-3">
                        <ProductRFC name="samsung" price="$20" />
                    </div>
                    <div className="col-3">
                        <ProductRFC name="sony" price="$30" />
                    </div>
                    <div className="col-3">
                        <ProductRFC name="xiaomi" price="$40" />
                    </div>
                </div>
            </div>
        )
    }
}
