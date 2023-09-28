import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Header from '../components/Header';

const {width, height} = Dimensions.get('screen');

const TicketDetail = () => {
  const uNavigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <View style={Styles.item}>
        <View style={Styles.information}>
          <View style={Styles.center}>
            <Text style={Styles.title}>Cinema</Text>
            <Text style={Styles.text}>CGV squart Binh Duong</Text>
          </View>
          <View style={Styles.center}>
            <Text style={Styles.title}>Date</Text>
            <Text style={Styles.text}>24/09/2021</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={Styles.center}>
              <Text style={Styles.title}>Time</Text>
              <Text style={Styles.text}>18:00</Text>
            </View>
            <View style={Styles.center}>
              <Text style={Styles.title}>Seat</Text>
              <Text style={Styles.text}>7A</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderStyle: 'dashed',
            borderColor: 'rgba(9, 140, 208, 1)',
            borderTopWidth: 3,
            width: (width * 3) / 5,
          }}></View>
        <ImageBackground
          source={require('../assets/img/doraemon_vungdatlytuongtrenbautroi.jpg')}
          style={Styles.image}
          imageStyle={{
            borderRadius: 8,
          }}>
          <LinearGradient
            colors={['rgba(9, 140, 208, 1)', 'rgba(9, 140, 208, 0)']}
            style={Styles.image}></LinearGradient>
          <View style={Styles.circle1}></View>
          <View style={Styles.circle2}></View>
          <View
            style={{
              position: 'absolute',
              width: (width * 3) / 5,
              height: 300,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={Styles.qr}>
              <QRCode value="1234" size={120} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  item: {
    marginHorizontal: width / 5,
  },
  information: {
    width: (width * 3) / 5,
    backgroundColor: 'rgba(9, 140, 208, 1)',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    padding: 16,
  },
  title: {
    color: 'rgba(255,255,255, 0.8)',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
  },
  center: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  image: {
    height: 300,
    width: (width * 3) / 5,
  },
  circle1: {
    backgroundColor: '#171723',
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    top: -21,
    left: -21,
  },
  circle2: {
    backgroundColor: '#171723',
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    top: -21,
    right: -21,
  },
  qr: {
    backgroundColor: '#FFFFFF',
    width: 152,
    height: 152,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default TicketDetail;
