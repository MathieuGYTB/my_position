import React, {useState} from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import i18n from '../i18n.js';
import { AdsConsent } from 'react-native-google-mobile-ads';
import { firestore } from '../FirebaseConfig.js';
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Rules() {

  //define variables
  const [docR, setDocR] = useState();

  async function getDocId () {
    try {
      const docId = await AsyncStorage.getItem('docId');

      if (docId !== null) {
        const docRef = await doc(firestore, "UsersConsent", docId);
        await setDocR(docRef);

      } else {
        console.log('pas de doc id');
      }
    } catch (e) {
      console.error(e);
    }
  }
  getDocId();
  //function to show form and add user consent status
  async function showForm() {

      await AdsConsent.showForm();
      const {storeAndAccessInformationOnDevice} = await AdsConsent.getUserChoices();

      let d = new Date();
      let date = d.toString();

      const userConsents = {
         date: date,
         consent: storeAndAccessInformationOnDevice
      }
      updateDoc(docR, { userConsent: arrayUnion(userConsents)});
  };

  //define css styles
  const styles = StyleSheet.create({
    container: {
      margin: 20
    },
    text: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });


  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{i18n('rulesTitle')} :</Text>
        <Text>
          {i18n('rules')}
        </Text>
        <Text>{"\n"}</Text>
        <Button title={i18n('showForm')} onPress={showForm}/>
      </ScrollView>
    </View>
  )
};
