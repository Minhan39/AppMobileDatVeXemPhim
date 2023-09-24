import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BoxTextInput from '../components/BoxTextInput';
import SecondaryButton from '../components/SecondaryButton';
import {movies} from '../data/MoviesSchema';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(movies);
  const uNavigation = useNavigation();
  const MovieItem = ({name}) => {
    return (
      <View style={Styles.movie}>
        <MaterialIcons name={'local-movies'} size={24} color={'#FFFFFF'} />
        <Text style={Styles.name}>{name}</Text>
        <Feather name={'arrow-up-left'} size={24} color={'#FFFFFF'} />
      </View>
    );
  };
  const onChangeSearch = text => {
    setSearchValue(text);
    const newData = movies.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };
  return (
    <View style={Styles.container}>
      <BoxTextInput
        autoFocus={true}
        width={270}
        onChangeText={onChangeSearch}
        value={searchValue}
        right={
          <SecondaryButton
            buttonStyle={Styles.cancelButton}
            text={'cancel'}
            textStyle={Styles.cancelText}
            onPress={() => uNavigation.goBack()}
          />
        }
      />
      <FlatList
        data={data}
        renderItem={({item}) => <MovieItem name={item.name} />}
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
  cancelButton: {
    height: 48,
    borderBottomColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  cancelText: {
    color: '#0094FF',
  },
  movie: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: {
    color: '#FFFFFF',
  },
});

export default Search;
