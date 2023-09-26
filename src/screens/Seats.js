import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import Price from '../components/Price';

const generateSeat = () => {
  let array = [];
  let num = 0;
  let numRow = 6;
  let numCol = 8;
  for (let i = 0; i < numRow; i++) {
    let colArray = [];
    for (let j = 0; j < (i % 2 == 0 ? numCol : numCol + 1); j++) {
      num++;
      let obj = {
        num: num,
        empty: Math.random() >= 0.5,
        selected: false,
      };
      colArray.push(obj);
    }
    array.push(colArray);
  }
  return array;
};

const Seats = () => {
  const uNavigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <View style={Styles.col}>
        <MaterialCommunityIcons
          name="monitor-screenshot"
          size={40}
          color={'#FFFFFF'}
          style={{marginBottom: 16}}
        />
        {generateSeat().map((item, index) => {
          return (
            <View key={index} style={Styles.row}>
              {item.map((subItem, subIndex) => {
                return (
                  <Pressable
                    key={subItem.num}
                    style={[
                      Styles.seat,
                      {backgroundColor: subItem.empty ? '#36364F' : '#FFFFFF'},
                    ]}></Pressable>
                );
              })}
            </View>
          );
        })}
      </View>
      <View style={Styles.description}>
        <View style={Styles.row}>
          <View
            style={[
              Styles.circle,
              {backgroundColor: '#36364F', marginRight: 8},
            ]}></View>
          <Text style={Styles.text}>Available</Text>
        </View>
        <View style={Styles.row}>
          <View
            style={[
              Styles.circle,
              {backgroundColor: '#FF0000', marginRight: 8},
            ]}></View>
          <Text style={Styles.text}>Selected</Text>
        </View>
        <View style={Styles.row}>
          <View
            style={[
              Styles.circle,
              {backgroundColor: '#FFFFFF', marginRight: 8},
            ]}></View>
          <Text style={Styles.text}>Reserved</Text>
        </View>
      </View>
      <Price
        price={'75000'}
        titleButton={'Buy now'}
        onPress={() => uNavigation.navigate('ComboOptions')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  seat: {
    height: 24,
    width: 24,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});

export default Seats;
