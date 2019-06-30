import React, { Component } from 'react'
import { Row, Col, Card, Tooltip, Menu, Dropdown, Icon, Button,Layout } from 'antd';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
// import MarkerClusterGroup from 'react-leaflet-markercluster';

// import "leaflet/dist/leaflet.css";

// const {Content} = Layout;


//把图标重新引入
// delete L.Icon.Default.prototype._getIconUrl
// L.Icon.Default.imagePath = ''
// L.Icon.Default.mergeOptions({
//       iconRetinaUrl: require('../../assets/markers/marker-icon-2x.png'),
//        iconUrl: require('../../assets/markers/marker-icon.png'),
//       shadowUrl: require('../../assets/markers/marker-shadow.png')
// })

export default class LeafletCluster extends Component {
    render() {
        return (
            <div>
                LeafletCluster
            </div>
        )
    }
}
