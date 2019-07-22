import React, { Component } from 'react'
import L from 'leaflet'
import 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'

export default class LeafletDraw extends Component {

    componentDidMount() {
        var map = L.map('map').setView([51.505,-0.09],13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);

        map.on(L.Draw.Event.CREATED, function (event) {
            console.log(event.layer)
            var layer = event.layer;
            drawnItems.addLayer(layer);
        });

           /*
         let drawnItems = new L.FeatureGroup();
         this.map.addLayer(drawnItems);
         var drawControl = new L.Control.Draw({
             draw: {
                 polyline: false, 
                 polygon: true, 
                 marker: false,
                 rectangle: false,
                 circle: true,
                 circlemarker: false
             },
             edit: {
                 featureGroup: drawnItems,
 
             }
         });
         this.map.addControl(drawControl);
         
         this.map.on(L.Draw.Event.CREATED, function (event) {
             console.log(event.layer)
             var layer = event.layer;
             drawnItems.addLayer(layer);
         });
 
         this.map.on(L.Draw.Event.DRAWSTART, function(event) {
             console.log(event.layer)
         })
         */
    }

    render() {
        return (
            <div id="map" className="full-main"></div>
        )
    }
}
