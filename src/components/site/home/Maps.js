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
  top: -30,
  zIndex: 1000
};

const Place = () => (
  <div style={markerStyle}>
    <i className="fas fa-map-marker-alt" />
  </div>
);

const createMapOptions = maps => {
  return {
    // panControl: false,
    // mapTypeControl: false,
    // scrollwheel: false,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#212121'
          }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#212121'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#181818'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#1b1b1b'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#2c2c2c'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#8a8a8a'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#373737'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#3c3c3c'
          }
        ]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [
          {
            color: '#4e4e4e'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#000000'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#3d3d3d'
          }
        ]
      }
    ]
  };
};

export default class Map extends React.Component {
  static defaultProps = {
    center: { lat: -28.39533639, lng: -53.91555373 },
    zoom: 16
  };

  render() {
    return (
      <div style={style} className="google-map">
        <GoogleMapReact
          options={createMapOptions}
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
