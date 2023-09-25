import React from 'react';
import {StyleSheet, View, Pressable, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {weekdays} from '../utils/Logic';
import PrimaryButton from '../components/PrimaryButton';
import StartTimeSchema from '../data/StartTimeSchema';

const TicketOptions = () => {
  const uNavigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Pressable onPress={() => uNavigation.goBack()}>
          <Feather
            name={'arrow-left'}
            size={24}
            color={'rgba(255,255,255,1)'}
          />
        </Pressable>
        <FontAwesome name={'search'} size={24} color={'rgba(255,255,255,1)'} />
      </View>
      <FlatList
        horizontal
        data={weekdays ? weekdays : []}
        renderItem={({item}) => (
          <View style={Styles.week}>
            <View style={Styles.date}>
              <Text style={Styles.dday}>{item.date}</Text>
              <Text style={Styles.day}>{item.weekday}</Text>
            </View>
          </View>
        )}
        style={{flexGrow: 0}}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-around',
        }}
      />
      <FlatList
        data={StartTimeSchema ? StartTimeSchema : []}
        renderItem={({item}) => (
          <View style={{marginTop: 8}}>
            <Text style={Styles.cinemaText}>{item.name}</Text>
            <FlatList
              horizontal
              data={item.data ? item.data : []}
              renderItem={({item}) => (
                <View style={Styles.time}>
                  <Text style={Styles.timeText}>{item.time}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
      <View style={{marginBottom: 16}}>
        <PrimaryButton
          value={'Buy ticket'}
          onPress={() => uNavigation.navigate('Seat')}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: 'rgba(196, 196, 196, 0.07)',
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dday: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  day: {
    color: '#CCCCCC',
    fontSize: 10,
  },
  cinemaText: {
    color: '#FFFFFF',
    marginBottom: 8,
    paddingLeft: 16,
  },
  time: {
    backgroundColor: 'rgba(196, 196, 196, 0.07)',
    padding: 16,
    marginRight: 16,
  },
  timeText: {
    color: '#FFFFFF',
  },
});

export default TicketOptions;
