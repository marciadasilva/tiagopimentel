import React from 'react';
import GoogleMapReact from 'google-map-react';

const style = {
  width: '100vw',
  height: '75vh'
};

const markerStyle = {
  color: 'red',
  fontSize: '3rem',
  position: 'absolute',
  left: -5,
  top: -30
};

const Place = () => (
  <div style={markerStyle}>
    <i className="fas fa-map-marker-alt" />
  </div>
);

export default class Map extends React.Component {
  static defaultProps = {
    center: { lat: -28.39533639, lng: -53.91555373 },
    zoom: 16
  };
  render() {
    return (
      <div style={style} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD8fvF0DIw_-YRiZ3w3GjG3YJ5kjznEP3k' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Place lat={-28.39533639} lng={-53.91555373} />
        </GoogleMapReact>
      </div>
    );
  }
}
