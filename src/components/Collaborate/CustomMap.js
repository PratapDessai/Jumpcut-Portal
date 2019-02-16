import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
class CustomMap extends Component {

  static defaultProps = {
    center: {
      lng: 10.07838,
      lat: 53.56388
    },
    zoom: 12
  };

  constructor(props) {
    super(props);

    this.iconUrl = 'https://i.l.inmobicdn.net/helix-cors/custom/assets/icon.png';
    this.centerIcon = 'https://i.l.inmobicdn.net/helix-cors/custom/assets/centericon.png';
    // In production will be passed via Environment variable
    this.API_KEY = "AIzaSyAaqGBVGCz8F72NDXXRQEMgaQ4-j0aSB00";
  }
 
  onGoogleApiLoaded = ({map, maps}) => {
    this.map = map;
    this.maps = maps;
    this.infowindow = new maps.InfoWindow();

    let { places } = this.props;
    this.callback(places);
  }

  callback = (results, status) => {
    for (let i = results.length; i-- ;) {
      this.renderMarkers(results[i]);
    }

    let centerIconObj = {
      url: this.centerIcon,
      scaledSize: new this.maps.Size(40, 56),
      origin: new this.maps.Point(0,0),
      anchor: new this.maps.Point(0, 0)
    };
    new this.maps.Marker({
      position: {
        lng: 10.07838,
        lat: 53.56388
      },
      map: this.map,
      icon: centerIconObj
    });
  }

  renderMarkers = (place) => {

    let icon = {
      url: this.iconUrl,
      scaledSize: new this.maps.Size(36, 32),
      origin: new this.maps.Point(0,0),
      anchor: new this.maps.Point(0, 0)
    };
    console.log(place.id);

    let markerLabel = {
      color: "white",
      fontSize: "10px",
      fontWeight: "800",
      text: place.id.toString()
    }

    let marker = new this.maps.Marker({
      position: {lat: parseFloat(place.coordinate.lat), lng: parseFloat(place.coordinate.lng)},
      map: this.map,
      label: markerLabel,
      icon: icon
    });

    let id = place.id.toString();
    marker.addListener('click', () => {
      this.infowindow.setContent(`<span style="background-color: #52E0CB; padding: 4px;"> ${id} :  ${place.name} </span>`);
      this.infowindow.open(this.map, marker);
    });

    new this.maps.Circle({
      strokeColor: 'grey',
      strokeOpacity: 0.8,
      strokeWeight: 0.1,
      fillColor: 'grey',
      fillOpacity: 0.01,
      map: this.map,
      center: {
        lng: 10.07838,
        lat: 53.56388
      },
      radius: 58 * 100
    });

  }

  

  render() {

    let customStyles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#b0d5ce"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ];

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={this.onGoogleApiLoaded}
          options={{styles: [...customStyles]}}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default CustomMap;