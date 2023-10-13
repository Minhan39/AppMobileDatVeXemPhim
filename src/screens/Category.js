import {React, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

const {width, height} = Dimensions.get('screen');

const Category = () => {
  const uNavigation = useNavigation();
  const [categories, setCategories] = useState([]);

  const getMoviesFromApi = () => {
    return fetch('https://5259-115-75-187-3.ngrok-free.app/api/categories')
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    setTimeout(async () => {
      setCategories(await getMoviesFromApi());
    }, 1000);
  });

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
              {item.image == '' ? (
                <></>
              ) : (
                <Image
                  source={{uri: item.image}}
                  style={{width: 48, height: 48}}
                />
              )}
            </View>
            <Text style={Styles.name}>{item.name}</Text>
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
    marginBottom: width / 16,
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
