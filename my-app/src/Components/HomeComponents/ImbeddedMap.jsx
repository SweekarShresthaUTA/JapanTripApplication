import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import styles from "./Home.module.css";

export class MapContainer extends Component {
  // different states to handle info windwo and the markers in the google maps window
  // the selected pages can also be rendered as the state will change
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  // onClick trigger function that takes in props and marker to show info window
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  // onClose trigger to close the info window
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  // main function that triggers the google maps - as per Google API console directions
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          className={styles.map}
          // inital loction provided - Tokyo Lat and Lng
          initialCenter={{
            lat: 35.6762,
            lng: 139.6503,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Kenyatta International Convention Centre"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCnx9Lg0YjRHD2jyfII4pqRgi1EL7n5jp4",
})(MapContainer);
