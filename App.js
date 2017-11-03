import React from 'react';
import {  AppRegistry,
          StyleSheet,
          Dimensions,
          Text,
          View, 
          StatusBar
         } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        {
          id: 1,
          title: 'Casa do café',
          description: 'Café quentinho...',
          latitude: -27.2106710,
          longitude: -49.6362700,
        },
        {
          id: 2,
          title: 'RocketSeat',
          description: 'Programação, empreendedorismo e mindset',
          latitude: -27.2006710,
          longitude: -49.6362700,
        },
        {
          id: 3,
          title: 'Casa do José',
          description: 'José, tá em casa?',
          latitude: -27.2006710,
          longitude: -49.6262700,
        }
      ]
    };
 }


  render() {
    const { region } = this.state.places;
    alert(region)

    return (

      <View style={{ flex: 1 }}>
         <StatusBar
            backgroundColor="green"
             barStyle="light-content"
          />

      



      <View style={{ backgroundColor: 'green', height: 80, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
      {this.state.places.map(element=>(
        
        1
      ))}
      </Text> 
 
      </View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 80,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
     ...StyleSheet.absoluteFillObject,
  },
});
