import React, { Component } from 'react'
import CarouselLay from './CarouselLay'
import FooterLay from './FooterLay'
import HeaderLay from './HeaderLay'

export default class LayoutsMain extends Component {
    render() {
        return (
            <div>
                <HeaderLay/>
                <CarouselLay/>
                <FooterLay/>
            </div>
        )
    }
}
