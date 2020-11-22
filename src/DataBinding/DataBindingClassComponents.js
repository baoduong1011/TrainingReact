import React, { Component } from 'react'

export default class DataBindingClassComponents extends Component {
     sinhVien = {
        ma:'1',
        ten:'Duong Tuan Bao',
        hinhAnh:'http://picsum.photos/200'
    }
    renderPicture = () => {
        return <img src={this.sinhVien.hinhAnh} />
    }
    render() {
        const title = "FrontEnd54";
        const renderTitle = () => {
            return <p className="text-danger">
                {title}
            </p>
        }
        return (
            <div>
                <h3>DataBindingClass</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên:{this.sinhVien.ma}</li>
                    <li><img src={this.sinhVien.hinhAnh} /></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
