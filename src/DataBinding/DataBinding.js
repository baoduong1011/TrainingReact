import React from 'react'

export default function DataBinding() {
    // binding biến 
    const title = "CyberSoft";
    const imgSrc = "http://picsum.photos/200/200";
    const sinhVien = {
        maSV: '0001',
        tenSinhVien: 'Nguyen Van A',
        hinhAnh: 'http://picsum.photos/200'
    }

    //biến hàm 
    const renderImg = () => {
        // Giá trị phải trả về 1 chuỗi số
        return <div>
                <h3>Hình ảnh</h3>
                <img src={sinhVien.hinhAnh} width="200" height="200"/>
        </div>
    }
    return (
        <div>
            <h3>DataBinding</h3>
            <p id="title" className="display-4">Tiêu đề: {title}</p>
            <img src={imgSrc} width="200" height="200"></img>
            <input className="form-control w-25 " value={title} />
            <div className="card-columns">
                <div className="card" style={{width:200,heiht:200}}>
                    <img className="card-img-top" src={sinhVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                        <p className="card-text">{sinhVien.maSV}</p>
                    </div>
                </div>
            </div>
            <hr/>
            {renderImg()}
        </div>
    )
}
