import React, { Component } from 'react'

export default class DemoState extends Component {

    state = {
        // dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác 
        isLogIn: false
    }
    userName = 'Bảo';
    renderContent = () => {
        if(this.state.isLogIn){
            return <p>Hello {this.userName}</p>
        }
        return <button onClick={ () => {
                this.handleLogin();
        }} className="btn btn-success">Đăng Nhập</button>
    }

    handleLogin = () => {
        // không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState
        // setState(): là phương thức có sẵn lớp đối tượng component => dùng để thay đổi giá trị trong this.state đồng thời gọi lại hàm render
        this.state.isLogIn=true;
        // this.state.isLogIn=true; không thể gán lại giá trị nên t sử dụng hàm setState
        console.log('isLogin: ',this.state.isLogIn);
        const newState = {
            isLogIn: true
        }
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h3>If - For</h3>
        {/* {this.isLogIn===true ? <p>Hello {this.userName}</p> : <button className="btn btn-success">Đăng Nhập</button>} */}
                {this.renderContent()}
                </div>
            </div>
        )
    }
}
