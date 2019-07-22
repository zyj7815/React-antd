import L from 'leaflet'
import 'leaflet.markercluster'
import 'leaflet-polylinedecorator'
import 'leaflet-draw'
import 'leaflet-bing-layer'
import 'leaflet.chinesetmsproviders'
import './editLeafletMap'
import mapIcon from '../../assets/markers/my-position.png'

const navigator = window.navigator
const BINGKEY = 'AhjocoV9azXeFhUHrnNiRzmzXEhxCpZ_rIHHysPq2UQZtjsOlTGWnnkQPRi2TTkF'


const circlePopupOption = {
    closeOnClick: false,
    autoClose: false,
    closeButton: false,
}

const fenceStyle = {
    color: '#1884CE',
    weight: 2,
    fillColor: '#1884CE',
    fillOpacity: .2,
}

const MAP_MODE = {
    NORMAL_MODE: 1,  // 普通地图
    SATELLITE_MODE: 2 // 卫星地图
}

const dataForNew = {
    msg_type: 1,
    type: "Round",
}

export default class DrMap {

    constructor(mapElement = 'dr-map') {
        this.mapElement = mapElement    // map的DOM
        this.map = ''                   // 初始化地图对象
        this.zoomControl = false;       // 是否显示缩放按钮
        this.data = []                  // 绘制围栏的数据源
        this.graphGroup = []            // 图形组，存放绘制过得图形
        this.mapModer = {}              // 地图类型对象，卫星图/地图
        this.mode = MAP_MODE.NORMAL_MODE// 地图类型，默认普通地图
        this.option = {
            editable: true,
            newFence: false
        }

    }

    /**
     * 初始化地图
     */
    initMap() {

        // BINGKEY什么用不清楚，老代码中的直接复制过来
        const bingLayer1 = L.tileLayer.bing({ bingMapsKey: BINGKEY })
        const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

        // 高德卫星图
        const Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
            maxZoom: 18,
            minZoom: 5
        })

        // 普通地图
        const osmGroup = L.layerGroup([osm])

        // 配置卫星地图
        const bingLayer = L.layerGroup([bingLayer1, Gaodimga]);
        const satellite = L.layerGroup([bingLayer])

        // 将地图类型放入一个对象，用于之后切换地图时调用
        this.mapModer = {
            normal: osmGroup,
            satellite,
        }


        this.map = L.map(this.mapElement, {
            ...this.option,
            ...{ layers: [osmGroup] }
        }).setView([30, 104], 5)
        L.control.zoom({ position: 'bottomright' })

        L.control.scale({
            imperial: false,
        }).addTo(this.map)

        this.drawMe(this.map)

    }



    drawMe(map) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let poi = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }
            console.log("当前位置: ", poi)
            const latlng = new L.LatLng(poi.latitude, poi.longitude)
            let markerOptions = {
                icon: L.icon({
                    iconUrl: mapIcon,
                    iconAnchor: [16, 28],
                })
            }
            L.marker(latlng, markerOptions).addTo(map)
        })
    }

    /**
     * 绘制围栏
     */
    drawLeafFence(data = []) {
        const circles = []

        // 先将之前的地图围栏和标识都删除，否则之前的layer会一直存在
        this.map.removeLayer(this.graphGroup)

        for (let lbs of data) {
            if (lbs.type === "Round") {
                const { lat, lng } = lbs.point
                const radius = lbs.distance
                const name = lbs.area_name
                const circle = L.circle([lat, lng], { radius, ...fenceStyle })
                circle.bindPopup(`<div>${name}</div>`, circlePopupOption)
                circles.push(circle)
            }
            else {
                const paths = [...lbs.polygon.points]
                const name = lbs.area_name
                const path2 = []
                for (let path of paths) {
                    path2.push([path.lat, path.lng])
                }
                const circle = L.polygon(path2, fenceStyle).addTo(this.map)
                circle.bindPopup(`<div>${name}</div>`, circlePopupOption)
                circles.push(circle)
            }
        }

        this.graphGroup = L.featureGroup(circles).addTo(this.map)
        const bounds = this.graphGroup.getBounds()
        this.map.fitBounds(bounds)
        this.setZoom(this.map)

        for (let circle of circles) {
            circle.openPopup()
        }
    }

    /**
     * 改变地图样式，地图 / 卫星图切换
     */
    changeMapType() {

        if (this.mode === MAP_MODE.NORMAL_MODE) {
            this.mode = MAP_MODE.SATELLITE_MODE
            this.map.removeLayer(this.mapModer.normal)
            this.map.addLayer(this.mapModer.satellite)
        } else {
            this.mode = MAP_MODE.NORMAL_MODE
            this.map.addLayer(this.mapModer.normal)
            this.map.removeLayer(this.mapModer.satellite)
        }
    }


    customDraw() {

        let that = this;
        L.EditControl = L.Control.extend({
            options: {
                position: 'topright',
                callback: null,
                kind: '',
                html: ''
            },

            onAdd: function (map) {
                var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                    link = L.DomUtil.create('a', '', container);

                link.href = '#';
                link.title = 'Create a new ' + this.options.kind;
                link.innerHTML = this.options.html;
                L.DomEvent.on(link, 'click', L.DomEvent.stop).on(link, 'click', function (e) {
                    window.LAYER = this.options.callback.call(map.editTools);
                }, this);
                return container;
            }            
        });


        L.NewPolygonControl = L.EditControl.extend({
            options: {
                position: 'topleft',
                callback: that.map.editTools.startPolygon,
                kind: 'polygon',
                html: '▰'
            }
        });
    
        L.NewCircleControl = L.EditControl.extend({
            options: {
                position: 'topleft',
                callback: that.map.editTools.startCircle,
                kind: 'circle',
                html: '⬤'
            }
        });

        let polygon = new L.NewPolygonControl()
    
        this.map.addControl(polygon);
        this.map.addControl(new L.NewCircleControl());

        this.map.on('editable:editing', e => {
            console.log(e.layer.editing._shape)
        })

        // this.map.on('editable:drawing:move', e => {
        //     console.log(e.layer.editing._shape)
        // })


    }



    /**
     * 动态设置地图缩放级别
     * @param map
     * @param open
     * @returns {boolean}
     */
    setZoom = (map, open = false) => {
        if (open) {
            map.setZoom(13)
            return false
        }
        const zoom = map.getZoom()

        zoom > 15 && map.setZoom(15)
    }





}




