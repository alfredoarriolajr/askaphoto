import React, { Component } from 'react';
import { ReactDOM } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkb2FycmlvbGFqciIsImEiOiJja3U1N2ptc2owOTZkMnVtbHBya2RvOHRkIn0.CCvtBHLmrl-FSp8aVV0dsg';

class Mapp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -121.884681,
            lat: 38.027976,
            zoom: 10
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} style={{width:'100%', height:'40vh'}}/>
            </div>
        )
    }
}

export default Mapp;