import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'iphone X', price: 2000 },
        { id: 3, name: 'iphone X5', price: 3000 },
    ];

    // renderProduct = () => {
    //     let arrSP = [];
    //     for (let index in this.products) {   
    //         let product = this.products[index];
    //         let jsxProduct = <div className="col-4">
    //             <img className="card-img-top" src="https://picsum.photos/200" alt />
    //             <div className="card-body">
    //                 <h4 className="card-title">{product.name}</h4>
    //                 <p className="card-text">{product.price}</p>
    //             </div>
    //         </div>;

    //         arrSP.push(jsxProduct);
    //     }
    //     return arrSP;
    // }

    renderProductByMap = () => {
        const arrJSX = this.products.map((product, index) => {
            return <div className="col-4" key={index}>
                <img className="card-img-top" src="https://picsum.photos/200" alt />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                </div>
            </div>;
        });
        return arrJSX;
    }

    renderTable = () => {
        return this.products.map((product,index) => {
            return <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.id}</td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* {this.renderProduct()} */}
                    {this.renderProductByMap()}
                    {/* {this.renderTable()} */}
                </div>
            </div>
        )
    }
}
