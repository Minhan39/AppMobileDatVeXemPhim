import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {categories} from '../data/CategoriesSchema';

const {width, height} = Dimensions.get('screen');

const Category = () => {
  const uNavigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <Pressable
            style={Styles.category}
            onPress={() => uNavigation.navigate('MovieList')}>
            <View style={Styles.icon}>
              <Text style={{color: '#FFFFFF'}}>{item.icon}</Text>
            </View>
            <Text style={Styles.name}>{item.title}</Text>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  category: {
    backgroundColor: 'rgba(196, 196, 196, 0.07)',
    width: width / 4,
    height: width / 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    backgroundColor: '#171723',
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  name: {
    color: '#FFFFFF',
  },
});

export default Category;
