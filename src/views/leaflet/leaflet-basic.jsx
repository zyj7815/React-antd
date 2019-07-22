import React, { Component } from 'react'
import DrMap from './map'

export default class LeafletBasic extends Component {

    componentDidMount() {
        new Promise((resolve, reject) => {
            resolve()
        }).then(() => {
            this.drMap = new DrMap('map');
            this.drMap.initMap();
            this.drMap.customDraw();
        })
    }

    render() {
        return (
            <div id="map" className="full-main"></div>
        )
    }
}
