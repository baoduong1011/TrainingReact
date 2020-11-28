import React, { Component } from 'react'
import RenderWithMap from '../../RenderWithMap/RenderWithMap'


export default class LayoutsGlass extends Component {
    state = {
        imgSrc: './img/glass/g1.jpg',
        id: 1,
        price: 30,
        name: 'GUCCI G8850U',
        url: './img/glass/v1.jpg',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
    }


    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glass/g1.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glass/g2.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glass/g3.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/glass/g4.jpg', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },];


    RenderMap = () => {
        const arrResult = this.arrProduct.map((product, index) => {
            if (product.url === this.state.imgSrc) {
                return <div className="col-4" key={index}>
                    <div className="card-body">
                        <p className="card-text">{product.id}</p>
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.desc}</p>
                    </div>
                </div>
            }
        });
        return arrResult;
    }


    render() {
        return (
            <div className=" header_big container-fluid">
                <h1>Header</h1>
                <div className="row">
                    <div className="col-6">
                        <img className="w-100 d-block" src={this.state.imgSrc} />
                        {/* <div className="card-body">
                            <h4 className="card-title">{this.state.id}</h4>
                            <p className="card-text">{this.state.name}</p>
                            <p className="card-text">{this.state.desc}</p>
                        </div>  */}
                        {this.RenderMap()};
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">Exterior Color</div>
                            <div className="card-body">
                                <div className="row mt-3 border border-dark p-3">
                                    <div className="col-5">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/glass/g1.jpg',
                                                id: 1,
                                                price: 30,
                                                name: 'GUCCI G8850U',
                                                url: './img/glass/v1.jpg',
                                                desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
                                            })

                                        }} src="./img/glass/v1.png" className="w-100" />
                                    </div>

                                    <div className="col-7">
                                        <h1>Glass Type 1</h1>
                                    </div>
                                </div>

                                <div className="row mt-3 border border-dark p-3">
                                    <div className="col-5">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/glass/g2.jpg',
                                                id: 2,
                                                price: 30,
                                                name: 'GUCCI G8759H',
                                                url: './img/glass/v2.jpg',
                                                desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
                                            })

                                        }} src="./img/glass/v2.png" className="w-100" />
                                    </div>

                                    <div className="col-7">
                                        <h1>Glass Type 2</h1>
                                    </div>
                                </div>


                                <div className="row mt-3 border border-dark p-3">
                                    <div className="col-5">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/glass/g3.jpg',
                                                id: 3,
                                                price: 30,
                                                name: 'DIOR D6700HQ',
                                                url: './img/glass/v3.jpg',
                                                desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
                                                
                                            })

                                        }} src="./img/glass/v3.png" className="w-100" />
                                    </div>

                                    <div className="col-7">
                                        <h1>Glass Type 3</h1>
                                    </div>
                                </div>


                                <div className="row mt-3 border border-dark p-3">
                                    <div className="col-5">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {

                                            this.setState({
                                                imgSrc: './img/glass/g4.jpg',
                                                id: 4,
                                                price: 30,
                                                name: 'DIOR D6700HQ',
                                                url: './img/glass/v4.jpg',
                                                desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
                                            })

                                        }} src="./img/glass/v4.png" className="w-100" />
                                    </div>

                                    <div className="col-7">
                                        <h1>Glass Type 4</h1>
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
