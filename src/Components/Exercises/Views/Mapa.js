
import React from 'react';
import MapboxMap, { Marker } from 'react-mapbox-wrapper';
import {Component} from 'react';

const styles = theme => ({
mapa: {
  padding: 0,
},
});
export default class SimpleMap extends Component{
  constructor(props) {
    super(props);

    this.onMapLoad = this.onMapLoad.bind(this);
  }

  onMapLoad(map) {
    this.map = map;
    this.forceUpdate();
  }
  render(){
    let marker;
    let marker2;
    const { coordinates } = this.props;

    if (this.map) {
      marker = <Marker coordinates={{lat: -16.3988, lng: -71.536906}} map={this.map} />;
      marker2 = <Marker coordinates={{lat: -16.4088, lng: -71.536906}} map={this.map} />;
    }
  return (
    <div style={{ height: 500, width: 450 }}>
      <MapboxMap
        accessToken="pk.eyJ1IjoiaGVlcm9vZWUyMDAiLCJhIjoiY2p1cHNna3dxMXQ3aTN5bXBubmQycGljdSJ9.a5PKLghNJ-wOqwTRR_8sqg"
        coordinates={{lat: -16.3988, lng: -71.536906}}
        onLoad={this.onMapLoad}
      >
      {marker}
      {marker2}
      </MapboxMap>
    </div>
  );
}
}

SimpleMap.displayName = 'SimpleMap';