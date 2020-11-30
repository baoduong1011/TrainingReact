import React, { Component } from 'react'

export default class ProductRCC extends Component {

    // this.props là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    // this.props thuộc tính không thể gán lại giá trị mới 
    render() {
        let {sanPham}=this.props;
        let {tenSP}=this.props.sanPham;
        // let {maSP,tenSP,giaBan,hinhanh} = this.props.sanPham;
        return (
            <div>
                <div className="card text-left">
                    <div className="card-body">
                        <h4 className="card-title">{tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                    </div>
                </div>

            </div>
        )
    }
}
