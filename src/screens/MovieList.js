import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {movies} from '../data/MoviesSchema';

const {width, height} = Dimensions.get('screen');

const MovieList = () => {
  const uNavigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Pressable
            style={Styles.item}
            onPress={() => uNavigation.navigate('Detail')}>
            <Image source={item.src} style={Styles.image} />
          </Pressable>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        horizontal={false}
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
  item: {
    marginTop: 12,
  },
  image: {
    width: width / 2 - 18,
    height: (width / 2 - 18) * 1.5,
    borderRadius: 8,
  },
});

export default MovieList;
