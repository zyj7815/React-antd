import React, { Component } from 'react'
import L from 'leaflet';   //引入leaflet
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Row, Col, Card, Tooltip, Menu, Dropdown, Icon, Button, Layout } from 'antd';
import "leaflet/dist/leaflet.css";
import './index.less'

const { Content } = Layout;


//把图标重新引入
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('../../assets/markers/marker-icon-2x.png'),
       iconUrl: require('../../assets/markers/marker-icon.png'),
      shadowUrl: require('../../assets/markers/marker-shadow.png')
})


//处理每一个marker的显示
const PopupMarker = ({ children, position }) => {
    const items = children.map((item) => (<span key={item.key}>{item.string}<br /></span>))

    return <Marker position={position}>
        <Popup><div>
            {items}
        </div></Popup>
    </Marker>

}
//处理markerlist
const MarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <PopupMarker key={key} {...props} />
    ))
    return <div>{items}</div>
}


export default class LeafletMaker extends Component {
    render() {
        const position = [22.7047, 113.302];  //中心点

        //模拟数据
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

        dataList.map(item => {
            let lng = Number.parseFloat(item.Lng);
            let lat = Number.parseFloat(item.Lat);
            let name = item.Name;
            let city = item.City || '';
            let district = item.District || '';
            let address = item.Address || '';
            let maintainer = item.Maintainer || '';
            let popupContent = [{ key: city, string: `城市：${city}` },
            { key: name, string: `基站名称：${name}` },
            { key: lng, string: `经度：${lng}` },
            { key: lat, string: `纬度：${lat}` },
            { key: district, string: `地区：${district}` },
            { key: address, string: `地址：${address}` },
            { key: maintainer, string: `维护人员：${maintainer}` },
            ]
            cellPoints.push({ key: name, position: [lat, lng], children: popupContent });
        });

        const style = {
            width: '100%',
            height: '600px',
        }
        return (
            <Content>
                <div className="ant-card-bordered" style={style}>

                    <Map center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
                        <TileLayer
                            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        />

                        <MarkersList markers={cellPoints} />

                    </Map>
                </div>
            </Content>
        )
    }
}
