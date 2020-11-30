import React, { Component } from 'react'
import productList from '../data/product.json';
import Product from './Product';
import Modal from './Modal'

export default class ProductList extends Component {

    state = {
        productDetail: productList[0],
        cart:[
            {maSP: 1,
            tenSP: "VinSmart Live",
            donGia: 5700000,
            hinhAnh: "./img/sp_iphoneX.png",
            soLuong: 1
            }
        ]
    };

    RenderProductList = () => {
        return productList.map((product, index) => {
            return (
               <Product onAddToCart={this.addToCart} onViewDetail={this.viewDetailHandler}  prod={product} key={index} />
            )
        })
    }

    viewDetailHandler = (product) => {
     
        this.setState({
            productDetail:product,}
        )
    }
    
    addToCart = (product) => {
        let newArr = [...this.state.cart];
        const productUpdate = {...product,soLuong:1};
        const indexProduct = newArr.findIndex((product,index) => {
            return product.maSP === productUpdate.maSP;
        })

        if(indexProduct !== -1){
           
            newArr[indexProduct].soLuong += 1;
            this.setState({
                // cart:[...this.state.cart,(this.state.cart[indexProduct].soLuong+=1)],
                cart:newArr
            })
        
        }
        else {
           
            newArr.push(productUpdate);
            this.setState({
                cart:newArr
            })
        }

        
    }

    

    render() {
        const {productDetail,cart} =this.state;
        return (
            <div className='container'>
                <Modal cart={cart}  />
                <h1 className="text-center text-danger">Product List</h1>

                <div className="row">
                    {this.RenderProductList()}
                </div>

                <div>
                    <h2 className='text-center'>Imformation About Product</h2>
                    <div className="container">
                        <div className='row'>
                            <div className='col-6'>
                            <h1 className="" >{productDetail.tenSP}</h1>
                            <img src={productDetail.hinhAnh} height='400px' />
                            </div>
                            <div className='col-6'>
                            <h1 className="text-center" >Imformation</h1>
                            <table className="table">
                                <tr>
                                    <th>Screen</th>
                                    <td>{productDetail.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>He Dieu Hanh</th>
                                    <td>{productDetail.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera Truoc</th>
                                    <td>{productDetail.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
                                    <td>{productDetail.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <td>{productDetail.ram}</td>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <td>{productDetail.rom}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>{productDetail.giaBan}</td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        )
    }
}


