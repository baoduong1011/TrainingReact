import React, { Component } from 'react'
import CarouselSmall from './CarouselSmall'
import ItemsCarousel from './ItemsCarousel'
import SideBar from './SideBar'

export default class CarouselLay extends Component {
    render() {
        return (
            <div>
                 <div style={{ marginTop: 50 }} className="main_Layouts container-fluid">
                    <div className="row">
                        <SideBar/>
                        <CarouselSmall/>
                    </div>
                </div>

            </div>
        )
    }
}
