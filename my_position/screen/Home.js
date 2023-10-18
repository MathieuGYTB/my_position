import React, { useState, useRef, useEffect } from 'react';
import { Pressable, Modal, TextInput, StyleSheet, View, Text, Button, Share, Alert } from 'react-native';
import * as Location from 'expo-location';
import i18n from '../i18n.js';
import mobileAds, { AdsConsent, AdsConsentStatus, BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import { firestore } from '../FirebaseConfig.js';
import { doc, setDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Network from 'expo-network';

function Home() {
    //define variables and state
    const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-7771306695979114/8272761826";
    const [location, setLocation] = React.useState(null);
    const [errorMSG, setErrorMSG] = React.useState(null);
    const [modalVisible, setModalVisible] = useState(true);
    const [name, setName] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [consent, setConsent] = React.useState(null);
    const consentInfo = React.useRef();
    const formAvailable = React.useRef();
    const status = React.useRef();
    const [docId, setDocId] = useState(null);
    let latitude = null;
    let longitude = null;
    let altitude = null;


    useEffect(() => {
        const docIds = async () => {
          try {
            const value = await AsyncStorage.getItem('docId');
            if (value !== null) {
              // value previously store
              setDocId(value);

            } else {
              console.log('they is not doc id for now');
            }
          } catch (e) {
            // error reading value
            console.error(e);
          }
        };
        docIds();
        //function to clear the async storage. uncomment if you need it
        //AsyncStorage.clear();
        //AdsConsent.reset();
        }, []);

    //function to add consent status
    async function addUsersConsentInfos() {
       formAvailable.current = await consentInfo.current.isConsentFormAvailable;
       status.current = await consentInfo.current.status;
    };

    //function to add users consent
    async function adsUserConsent() {

      //request user info status
      consentInfo.current = await AdsConsent.requestInfoUpdate();
      addUsersConsentInfos();

      if (consentInfo.current.isConsentFormAvailable !== undefined && consentInfo.current.status !== undefined) {

        if (consentInfo.current.isConsentFormAvailable && consentInfo.current.status === AdsConsentStatus.REQUIRED) {

          const formResult = await AdsConsent.showForm();

        }

        const {storeAndAccessInformationOnDevice} = await AdsConsent.getUserChoices();


          //verify the store and acces device info status (true or false)
        if (storeAndAccessInformationOnDevice === false) {

              setConsent(false);
                /**
                * The user declined consent for purpose 1,
                * the Google Mobile Ads SDK won't serve ads.
                */

        } else if (storeAndAccessInformationOnDevice === true) {

            //modify consent variable state
            setConsent(true);

            //initialize the ad load
            await mobileAds()
            .setRequestConfiguration({
            // Indicates that you want your content treated as child-directed for purposes of COPPA.
              tagForChildDirectedTreatment: true,

              // Indicates that you want the ad request to be handled in a
              // manner suitable for users under the age of consent.
              tagForUnderAgeOfConsent: true,

            })
            //initialize the mobile ads
            mobileAds().initialize();

        } else if (storeAndAccessInformationOnDevice === undefined ) {
              console.log('store access status is undefined');
        } else if (storeAndAccessInformationOnDevice === null) {
              console.log('store access status is null');
        } else {
              console.log('on ne sait pas');
        }

      } else {
          console.log('consent info undefined');
          const formResult = await AdsConsent.showForm();
      };
    };
    //call the adsUserConsent function
    adsUserConsent();

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
    };

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
      },
      input: {
        borderWidth: 2,
        borderColor: "black",
        margin: 20,
        paddingLeft:10,
        height: 50,
        borderRadius: 20,
      },
      submit: {
        borderWidth: 2,
        borderColor: "black",
        margin: 20,
        height: 50,
        borderRadius: 20,
        backgroundColor: "blue",
        color: "white",
        alignItems: "center",
        justifyContent: "center"
      },
      textPressable: {
        color: "white",
        fontSize: 25,
      }
    });

    function onPress() {

      //define regex to verify input value
      const letterRegex = /[^a-zA-Z]/;
      const testLetterName = letterRegex.test(name.trim());
      const testLetterFirstname = letterRegex.test(firstname.trim());

      if (name.trim() !== "" && firstname.trim() !== "") {
        if (testLetterName || testLetterFirstname) {
            Alert.alert(i18n('alphanumeric'));
        } else {
          //change the modal state in invisible
          setModalVisible(!modalVisible)

          //function to push the datas in in firebase firestore
          async function pushData() {

            //define variables
            let d = new Date();
            let date = d.toString();
            const ipAddress = await Network.getIpAddressAsync();

            //create a new doc
            const newDoc = await setDoc(doc(firestore, "UsersConsent", name.trim()+' '+firstname.trim()+' '+ipAddress), {
                name: name.trim(),
                firstname: firstname.trim(),
                ipAddress: ipAddress,
                userConsent: [
                {
                    date: date,
                    consent: consent
                }
                ]
            })

            //function to store doc id in async storage
            const storeData = async (value) => {
              try {
                await AsyncStorage.setItem('docId', value);
               } catch (e) {
                // saving error
                console.error(e);
                }
              }
            storeData(name.trim()+' '+firstname.trim()+' '+ipAddress);
          }

          //call the pushData function
          pushData();
        }

      } else { Alert.alert(i18n('alert'));}
    };


    return (
              <View style={styles.container}>
                  { docId === null ?
                  <Modal
                     animationType="slide"
                     visible={modalVisible}
                  >
                     <TextInput style={styles.input} placeholder={i18n('name')} onChangeText={setName} value={name}/>
                     <TextInput style={styles.input} placeholder={i18n('firstname')} onChangeText={setFirstname} value={firstname}/>
                     <Pressable style={styles.submit} onPress={onPress}>
                        <Text style={styles.textPressable}>{i18n('validate')}</Text>
                     </Pressable>
                  </Modal>
                  : null
                  }
                  <Button title={i18n('addPosition')} onPress={getUserLocation}/>
                  <Text style={styles.text}>{text}</Text>
                  <Button title={i18n('sharePosition')} onPress={sharePosition}/>
                  <Text>{"\n\n\n\n"}</Text>
                  <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                  />
              </View>
           )
};

export default Home;

