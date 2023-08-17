import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      marginTop: 100,
      marginBottom: 100,
      fontSize: 20
    }
  });

  const [location, setLocation] = React.useState(null);
  const [errorMSG, setErrorMSG] = React.useState(null);
  let latitude = null;
  let longitude = null;
  let altitude = null;

  async function getUserLocation() {

     const {status} = await Location.requestForegroundPermissionsAsync();
     if(status !== 'granted') {
       setErrorMSG(`la permission d'accès a été refusée`);
     }
     let location2 = await Location.getCurrentPositionAsync({});
     setLocation(location2);
  };

  useEffect(() => {
    getUserLocation();
  }, []);


  async function sharePosition() {
    try {
      await Share.share({
        message: 'Au secour ! Je suis coincé à la position indiqué par le lien ci dessous. Cliquez sur le lien pour afficher ma position dans google maps et venez me secourir svp : '+
        '\n latitude : '+latitude+
        '\n longitude : '+longitude+
        '\n altitude : '+altitude+
        '\n https://www.google.com/maps/search/?api=1&query='+latitude+'%2C'+longitude
      })
    } catch (e) {
      alert(e.message);
    }
  };

  let text = 'cliquez sur le boutton "Obtenir ma position"';
  if (errorMSG) {
    text = errorMSG;
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    altitude = location.coords.altitude;

    text = 'latitude : '+latitude+
           '\nlongitude : '+longitude+
           '\naltitude : '+altitude;
  }
  return (
            <View style={styles.container}>
               <Button title='Obtenir ma position' onPress={getUserLocation}/>
               <Text style={styles.text}>{text}</Text>
               <Button title='partager ma position' onPress={sharePosition}/>
            </View>
         )
};



