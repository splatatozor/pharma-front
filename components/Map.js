import React from 'react'
import MapView from 'react-native-maps';
import EventBus from 'react-native-event-bus'


const Marker = MapView.Marker

export default class Map extends React.Component {

  componentDidMount() {
    EventBus.getInstance().addListener("updateMarkers", this.listener = () => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
      EventBus.getInstance().removeListener(this.listener);
  }

  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.label} coordinate={place.coords} />
    ))
  } 
  
  render() {
    const { region } = this.props
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton
        showsMyLocationButton={true}
      >
        {this.renderMarkers()}
      </MapView>
    )
  }
}
const styles = {
  container: {
    width: '100%',
    height: '100%',
  }
}