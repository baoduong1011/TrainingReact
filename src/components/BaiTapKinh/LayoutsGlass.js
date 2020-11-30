import React, { Component } from 'react'
import RenderWithMap from '../../RenderWithMap/RenderWithMap'
import './LayoutsGlass.css';


export default class LayoutsGlass extends Component {
    state = {
        imgSrc: './img/glass/v1.png',
        id: 1,
        price: 30,
        name: 'GUCCI G8850U',
        url: './img/glass/v1.jpg',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
    }


    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glass/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glass/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glass/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glass/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glass/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glass/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glass/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glass/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glass/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];


    RenderMap = () => {
        const arrJSX = this.arrProduct.map((product, index) => {
            if(product.url === this.state.imgSrc){
                return <div className="card_text">
                <div className="card-bod">
                    <h5 className="card-tex text-center">{product.name}</h5>
                    <p className="card-tex text-center">{product.desc}</p>
                </div>
            </div>
            }
        })
        return arrJSX;
    }


    render() {
        return (
            <div>
                <div className=" header_big container-fluid">
                    <h1 className="text-center">TRY GLASS APP ONLINE</h1>
                    <div className="img_Main container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <img className="glass_left" src='./img/glass/model.jpg' />
                                <div className="infoAboutGlass">
                                    {this.RenderMap()}
                                </div>
                            </div>
                            <div className="col-6">
                                <img src='./img/glass/model.jpg' />
                            </div>
                        </div>
                    </div>
                    <div className="glass_Demo">
                        <img src={this.state.imgSrc} />
                    </div>



                    <div className="type_Glass container-fluid">
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g1.jpg" onClick={() => {

                            this.setState({
                                imgSrc: './img/glass/v1.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g2.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v2.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g3.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v3.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g4.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v4.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g5.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v5.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g6.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v6.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g7.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v7.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g8.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v8.png'
                            })
                        }} />
                        <img style={{ cursor: 'pointer' }} src="./img/glass/g9.jpg" onClick={() => {
                            this.setState({
                                imgSrc: './img/glass/v9.png'
                            })
                        }} />
                    </div>
                </div>
            </div>

        )
    }
}
