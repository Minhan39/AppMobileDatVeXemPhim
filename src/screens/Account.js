import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Account = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.layout}>
        <View style={[Styles.row, {paddingBottom: 64}]}>
          <Image
            source={require('../assets/img/doraemon_vungdatlytuongtrenbautroi.jpg')}
            style={Styles.avatar}
          />
          <Text style={[Styles.text, {fontWeight: 'bold', fontSize: 20}]}>
            Pham Minh An
          </Text>
        </View>
        <View>
          <View style={Styles.row}>
            <FontAwesome name="phone" size={24} color={'#FFFFFF'} />
            <Text style={Styles.text}>039 417 3877</Text>
          </View>
          <View style={Styles.row}>
            <MaterialIcons name="language" size={24} color={'#FFFFFF'} />
            <Text style={Styles.text}>Language</Text>
          </View>
          <View style={Styles.row}>
            <MaterialIcons name="logout" size={24} color={'#FFFFFF'} />
            <Text style={Styles.text}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  avatar: {
    height: 96,
    width: 96,
    borderRadius: 48,
  },
  text: {
    color: '#FFFFFF',
    paddingLeft: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
  },
  layout: {
    paddingTop: 32,
    paddingLeft: 32,
  },
});

export default Account;
