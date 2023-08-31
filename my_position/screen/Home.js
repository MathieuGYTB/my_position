import * as React from 'react';
import { StyleSheet, View, Text, Button, Share } from 'react-native';
import * as Location from 'expo-location';
import i18n from '../i18n.js';
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
       setErrorMSG(i18n('permission'));
     }
     let location2 = await Location.getCurrentPositionAsync({});
     setLocation(location2);
  };

  //function to share the user location
  async function sharePosition() {
    try {
      await Share.share({
        message: i18n('message')+
        '\n'+i18n('latitude')+' : '+latitude+
        '\n'+i18n('longitude')+' : '+longitude+
        '\n'+i18n('altitude')+' : '+altitude+
        '\n https://www.google.com/maps/search/?api=1&query='+latitude+'%2C'+longitude
      })
    } catch (e) {
      alert(e.message);
    }
  };

  //define the variable text
  let text = i18n('click')+' "'+i18n('addPosition')+'"';
  if (errorMSG) {
    text = i18n('permission');
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    altitude = location.coords.altitude;

    text = i18n('latitude')+' : '+latitude+
           '\n'+i18n('longitude')+': '+longitude+
           '\n'+i18n('altitude')+' : '+altitude;
  }

  return (
              <View style={styles.container}>
                 <Button title={i18n('addPosition')} onPress={getUserLocation}/>
                 <Text style={styles.text}>{text}</Text>
                 <Button title={i18n('sharePosition')} onPress={sharePosition}/>
              </View>
           )
  };
