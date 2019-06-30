import React, { Component } from 'react'
import { Row, Col, Card, Tooltip, Menu, Dropdown, Icon, Button, Layout } from 'antd';

import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import "leaflet/dist/leaflet.css";

const { Content } = Layout;


//把图标重新引入
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../../assets/markers/marker-icon-2x.png'),
    iconUrl: require('../../assets/markers/marker-icon.png'),
    shadowUrl: require('../../assets/markers/marker-shadow.png')
})

export default class LeafletCluster extends Component {
    render() {
        const position = [22.7047, 113.302];

        //const dataList = { data }.data.list;
        const dataList = [];
        for (let i = 0; i < 46; i += 1) {
            dataList.push({
                id: i,
                Province: '',
                Name: `site ${i}`,
                Lat: 22.7047 + `${i}`,
                Lng: 113.302 - `${i}`,
                currentValue: Math.floor(Math.random() * 1000),
                status: Math.floor(Math.random() * 10) % 2,
                purchaseDate: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
                create_time: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
                progress: Math.ceil(Math.random() * 100),
                Province: Math.floor(Math.random() * 10) % 2 ? '省份1' : '省份2',
                City: Math.floor(Math.random() * 10) % 2 ? '城市1' : '城市2',
            });
        }
        let cellPoints = [];

        const sytlep = {
            width: '100%',
        }

        dataList.map(item => {
            let lng = Number.parseFloat(item.Lng);
            let lat = Number.parseFloat(item.Lat);
            let name = item.Name;
            let city = item.City || '';
            let district = item.District || '';
            let Address = item.Address || '';
            let maintainer = item.Maintainer || '';
            let popupDiv = `<div style={stylep}>
          <span>城市：${city}</span>
          <br />
          <span>基站名称：${name}</span>
          <br />
          <span>经度：${lng}</span>
          <br />
          <span>纬度：${lat}</span>
          <br />
          <span>地区：${district}</span>
          <br />
          <span>地址：${Address}</span>
          <br />
          <span>维护人员：${maintainer}</span>
          <br />
          </div>`
            cellPoints.push({ position: [lat, lng], popup: popupDiv });
        });

        const style = {
            width: '100%',
            height: '600px',
        }

        //定义聚合点样式
        const createClusterCustomIcon = function (cluster) {
            return L.divIcon({
                html: `<span>${cluster.getChildCount()}</span>`,
                className: 'markercustom',
                iconSize: L.point(40, 40, true)
            });
        };
        return (
            <Content>
                <div className="ant-card-bordered" style={style}>

                    <Map center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <MarkerClusterGroup
                            spiderfyDistanceMultiplier={2}
                            iconCreateFunction={createClusterCustomIcon}
                            markers={cellPoints}
                        />

                    </Map>
                </div>
            </Content>
        )
    }
}
