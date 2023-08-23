import React from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';
import * as Location from 'expo-location';

export default function Home() {
//define styles
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

  //define variables and state
  const [location, setLocation] = React.useState(null);
  const [errorMSG, setErrorMSG] = React.useState(null);
  let latitude = null;
  let longitude = null;
  let altitude = null;

  //function to get the user location
  async function getUserLocation() {

     const {status} = await Location.requestForegroundPermissionsAsync();
     if(status !== 'granted') {
       setErrorMSG(i18n.t('permission'));
     }
     let location2 = await Location.getCurrentPositionAsync({});
     setLocation(location2);
  };

  //function to share the user location
  async function sharePosition() {
    try {
      await Share.share({
        message: i18n.t('message')+
        '\n latitude : '+latitude+
        '\n longitude : '+longitude+
        '\n altitude : '+altitude+
        '\n https://www.google.com/maps/search/?api=1&query='+latitude+'%2C'+longitude
      })
    } catch (e) {
      alert(e.message);
    }
  };

  //define the variable text
  let text = i18n.t('click')+  i18n.t('addPosition');
  if (errorMSG) {
    text = i18n.t('permission');
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
                 <Button title={i18n.t('addPosition')} onPress={getUserLocation}/>
                 <Text style={styles.text}>{text}</Text>
                 <Button title={i18n.t('sharePosition')} onPress={sharePosition}/>
              </View>
           )
  };
