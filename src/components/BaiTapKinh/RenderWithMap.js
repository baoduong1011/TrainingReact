import React, { Component } from 'react'

export default class RenderWithMap extends Component {


    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glass/v1.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glass/v2.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glass/v3.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/glass/v4.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        // { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        // { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        // { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        // { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        // { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
       ];

       renderProduct = () => {
           const arrPro = this.arrProduct.map((product,index) => {
               return <div className="col-4" key={index}>
                   <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <h4 className="card-title">{product.desc}</h4>
                   </div> 
               </div>
           })
       }


    render() {

        return (
            <div>
                {this.renderProduct()};
            </div>
        )
    }
}
