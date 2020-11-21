import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import SmartPhone from './SmartPhone'
import Laptop from './Laptop'
import Promotopn from './Promotopn'

export default class Layouts extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <SmartPhone/>
                <Laptop/>
                <Promotopn/>
            </div>
        )
    }
}
