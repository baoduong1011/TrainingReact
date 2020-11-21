import React, { Component } from 'react'

export default class DemoReactClassComponets extends Component {
    // reder là phương thức chưa nội dung giao diện thẻ 
    // khai báo nhiều thuộc tính và phương thức khác
    render() {
        // khai báo biến hàm . . .
        // khi viết nội dung thì phải viết trong nội dung này 
        return (
            <div>
                <div className="container">
                    <ul classname="nav justify-content-center ">
                    <li classname="nav-item">
                        <a classname="nav-link active" href="#">Active link</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link" href="#">Link</a>
                    </li>
                    <li classname="nav-item">
                        <a classname="nav-link disabled" href="#">Disabled link</a>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}

//rcc