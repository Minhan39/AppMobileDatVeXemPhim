import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import Price from '../components/Price';

const {width, height} = Dimensions.get('screen');
const combo = [
  {
    id: 0,
    name: 'Combo A',
    description: 'have 1 coca and 1 popcorn',
    price: 40000,
    num: 0,
  },
  {
    id: 1,
    name: 'Combo B',
    description: 'have 2 coca and 1 popcorn',
    price: 55000,
    num: 0,
  },
  {
    id: 2,
    name: 'Combo C',
    description: 'have 2 coca and 2 popcorn',
    price: 80000,
    num: 0,
  },
];

const ComboOptions = () => {
  const uNavigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <FlatList
        data={combo ? combo : []}
        renderItem={({item}) => (
          <View style={Styles.item}>
            <Image
              style={Styles.image}
              source={require('../assets/img/combo.jpeg')}
            />
            <View style={Styles.bodyItem}>
              <View style={Styles.headerItem}>
                <Text style={[Styles.text, {fontWeight: 'bold'}]}>
                  {item.name}
                </Text>
                <View style={Styles.num}>
                  <Pressable style={Styles.button}>
                    <Ionicons name="remove" size={24} color={'#FFFFFF'} />
                  </Pressable>
                  <Text style={[Styles.text, {marginHorizontal: 8}]}>
                    {item.num}
                  </Text>
                  <Pressable style={Styles.button}>
                    <Ionicons name="add" size={24} color={'#FFFFFF'} />
                  </Pressable>
                </View>
              </View>
              <Text style={Styles.text}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Price price={'75000'} titleButton={'Checkout'} onPress={() => uNavigation.navigate('Payment')}/>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  image: {
    width: 128,
    height: 128,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },
  bodyItem: {
    paddingLeft: 16,
    paddingTop: 16,
    width: width - 160,
  },
  text: {
    color: '#000000',
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  num: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#171723',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComboOptions;
