import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/black-car.jpg'
    }

    changeColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }

    render() {
        // xác định biến nào thay đổi bỏ vào thuộc tính state
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} />
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior Color</div>
                            <div className="card-body">
                                <div className="row mt-3 border border-dark p-3">
                                    <div className="col-2 ">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/car/products/black-car.jpg'
                                            })

                                            // this.changeColor('black');

                                        }} src="./img/car/icons/icon-black.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>

                                <div className="row mt-3 border border-dark p-3">
                                    <div  className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/car/products/silver-car.jpg'
                                            })

                                        }} src="./img/car/icons/icon-silver.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>

                                <div className="row mt-3 border border-dark p-3">
                                    <div className="col-2">
                                        <img  style={{ cursor: 'pointer' }}  onClick={() => {
                                            this.setState({
                                                imgSrc: './img/car/products/red-car.jpg'
                                            })
                                        }} src="./img/car/icons/icon-red.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>

                                <div className="row mt-3 border border-dark p-3">
                                    <div  className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/car/products/steel-car.jpg'
                                            })

                                        }} src="./img/car/icons/icon-steel.jpg" className="w-100" />
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
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
