import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">My Product</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid">
                                        <table>
                                            <tr>
                                                <th>ID Product</th>
                                                <th>Img</th>
                                                <th>Name Product</th>
                                                <th>Number</th>
                                                <th>Money</th>
                                                <th>Total Money</th>
                                            </tr>

                                                {   this.props.cart.map((product,index) => {
                                                    return <tr>
                                                    <td>
                                                        {product.maSP}
                                                    </td>
                                                    <td>

                                                        <img width='100%' src={product.hinhAnh}/>
                                                        
                                                    </td>
                                                    <td>
                                                        {product.tenSP}
                                                    </td>
                                                    <td>
                                                        {product.soLuong}
                                                    </td> <td>
                                                        {product.donGia}
                                                    </td>
                                                    <td>
                                                        {product.donGia*product.soLuong}
                                                    </td>
                                                </tr>
                                                })
                                                }

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
