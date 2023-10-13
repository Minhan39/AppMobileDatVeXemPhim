import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import {movies} from '../data/MoviesSchema';

const {width, height} = Dimensions.get('screen');
const Tickets = () => {
  const unavigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Header uNavigation={unavigation} />
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Pressable
            style={Styles.ticket}
            onPress={() => unavigation.navigate('TicketDetail')}>
            <ImageBackground
              source={item.src}
              style={Styles.image}
              imageStyle={{borderRadius: 8}}>
              <LinearGradient
                start={{x: 0.5, y: 0}}
                end={{x: 1, y: 0}}
                colors={['rgba(9, 140, 208, 0)', 'rgba(9, 140, 208, 1)']}
                style={Styles.linear}></LinearGradient>
              <View style={Styles.circle1}></View>
              <View style={Styles.circle2}></View>
              <View style={Styles.line}></View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#098CD0',
                justifyContent: 'space-evenly',
              }}>
              <View>
                <Text style={Styles.text}>
                  <FontAwesome name="map-marker" size={16} color={'#FFFFFF'} />{' '}
                  {item.cinema}
                </Text>
                <Text style={[Styles.text, {fontSize: 12}]}>
                  <FontAwesome name="calendar" size={12} color={'#FFFFFF'} />{' '}
                  {item.time}
                </Text>
              </View>
              <Text style={Styles.text}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {item.price}
                </Text>
                đ
              </Text>
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  ticket: {
    flexDirection: 'row',
    width: width - 32,
    backgroundColor: '#098CD0',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    paddingRight: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    height: 96,
    width: 150,
  },
  linear: {
    width: 150,
    height: 96,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'right',
  },
  circle1: {
    backgroundColor: '#171723',
    height: 32,
    width: 32,
    borderRadius: 16,
    position: 'absolute',
    top: -18,
    left: 48,
  },
  circle2: {
    backgroundColor: '#171723',
    height: 32,
    width: 32,
    borderRadius: 16,
    position: 'absolute',
    bottom: -18,
    left: 48,
  },
  line: {
    position: 'absolute',
    height: 100,
    width: 18,
    top: 0,
    bottom: 0,
    left: 48,
    borderRightColor: '#171723',
    borderRightWidth: 3,
    borderStyle: 'dashed',
  },
});

export default Tickets;
