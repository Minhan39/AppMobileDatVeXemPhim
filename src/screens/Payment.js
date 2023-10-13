import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Payment = () => {
  const uNavigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <View style={Styles.r}>
        <Image
          style={Styles.image}
          source={require('../assets/img/doraemon_vungdatlytuongtrenbautroi.jpg')}
        />
        <View style={{paddingLeft: 16}}>
          <Text style={[Styles.text, Styles.b]}>
            Doraemon: Nobita's Sky Utopia
          </Text>
          <Text style={Styles.text}>Monday, 2nd October, 2023</Text>
          <Text style={Styles.text}>19:30 - 20:30</Text>
          <Text style={Styles.text}>CGV Squart Binh Duong</Text>
          <Text style={Styles.text}>Seat 7A</Text>
          <Text style={[Styles.text, Styles.b]}>Total: 75 000 VND</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={Styles.title}>Ticket information</Text>
        <View style={{paddingTop: 16, paddingHorizontal: 16, paddingBottom: 8}}>
          <View style={[Styles.r, {justifyContent: 'space-between'}]}>
            <Text style={Styles.text}>Number</Text>
            <Text style={Styles.text}>x1</Text>
          </View>
          <View style={[Styles.r, {justifyContent: 'space-between'}]}>
            <Text style={Styles.text}>SubTotal</Text>
            <Text style={Styles.text}>75 000 VND</Text>
          </View>
        </View>
        <Text style={Styles.title}>Add combo</Text>
        <View style={Styles.r}>
          <View
            style={[
              Styles.r,
              {
                backgroundColor: 'rgba(255,255,255,0.1)',
                marginVertical: 16,
                marginLeft: 16,
                width: 72 + 16 + 128,
                borderRadius: 8,
              },
            ]}>
            <Image
              style={Styles.comboImage}
              source={require('../assets/img/combo.jpeg')}
            />
            <View style={{justifyContent: 'space-between', padding: 8}}>
              <View
                style={[
                  Styles.r,
                  {width: 128, justifyContent: 'space-between'},
                ]}>
                <Text style={[Styles.text, {fontSize: 16}]}>Combo 1</Text>
                <Ionicons name="add" size={24} color={'#FFFFFF'} />
              </View>
              <Text style={[Styles.text, Styles.b]}>60 000 VND</Text>
            </View>
          </View>
          <View
            style={[
              Styles.r,
              {
                backgroundColor: 'rgba(255,255,255,0.1)',
                marginVertical: 16,
                marginLeft: 16,
                width: 72 + 16 + 128,
                borderRadius: 8,
              },
            ]}>
            <Image
              style={Styles.comboImage}
              source={require('../assets/img/combo.jpeg')}
            />
            <View style={{justifyContent: 'space-between', padding: 8}}>
              <View
                style={[
                  Styles.r,
                  {width: 128, justifyContent: 'space-between'},
                ]}>
                <Text style={[Styles.text, {fontSize: 16}]}>Combo 1</Text>
                <Ionicons name="add" size={24} color={'#FFFFFF'} />
              </View>
              <Text style={[Styles.text, Styles.b]}>60 000 VND</Text>
            </View>
          </View>
        </View>
        <Text style={Styles.title}>Summary</Text>
        <View style={{paddingTop: 16, paddingHorizontal: 16, paddingBottom: 8}}>
          <View style={[Styles.r, {justifyContent: 'space-between'}]}>
            <Text style={Styles.text}>Total no VAT</Text>
            <Text style={Styles.text}>75 000 VND</Text>
          </View>
          <View style={[Styles.r, {justifyContent: 'space-between'}]}>
            <Text style={Styles.text}>VAT</Text>
            <Text style={Styles.text}>0 VND</Text>
          </View>
          <View style={[Styles.r, {justifyContent: 'space-between'}]}>
            <Text style={Styles.text}>Total</Text>
            <Text style={Styles.text}>75 000 VND</Text>
          </View>
        </View>
        <Text style={Styles.title}>Payment</Text>
        <View style={Styles.r}>
          <Image
            style={[Styles.comboImage, {marginVertical: 16, marginLeft: 16}]}
            source={require('../assets/img/combo.jpeg')}
          />
          <Image
            style={[Styles.comboImage, {marginVertical: 16, marginLeft: 16}]}
            source={require('../assets/img/combo.jpeg')}
          />
        </View>
        <Text
          style={[
            Styles.text,
            {paddingLeft: 16, fontStyle: 'italic', textAlign: 'center'},
          ]}>
          I agree to the terms and conditions.
        </Text>
        <PrimaryButton value={'Pay now'} customStyle={Styles.button} />
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  r: {
    flexDirection: 'row',
  },
  image: {
    height: 172,
    width: 128,
  },
  text: {
    color: '#FFFFFF',
    paddingBottom: 8,
  },
  b: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    color: '#FFFFFF',
    paddingVertical: 16,
    paddingLeft: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  comboImage: {
    height: 72,
    width: 72,
    borderRadius: 8,
    marginVertical: 8,
    marginLeft: 8,
  },
  button: {
    marginTop: 0,
    marginBottom: 16,
  },
});

export default Payment;
