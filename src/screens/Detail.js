import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

const {width, height} = Dimensions.get('screen');

const Detail = () => {
  const uNavigation = useNavigation();
  let description = `Nobita, heard by Dekisugi summarizing Thomas More's Utopia describes fantasy land where people live happily without pain or conflict after school asking Doraemon to help him find that ideal country but ignored. He ran to the mountain behind the school and was startled when a blue bug landed on his nose, pushed it aside, and saw something in the sky in the shape of Utopia. Doraemon immediately searched the timeline for information about this phenomenon, thanks to the "Time Report". Then, the group of friends gathered on the mountain behind the school began to search for Utopia with the
    "Zeppelin Time Airship" from time to time. confirmed above. Nobita's band spent an entire day playing and searching for Utopia but to no avail. That night Nobita saw the so-called Utopia he had seen before. The group of friends let the airship approach, but the group
    was covered with dark clouds and was suddenly ambushed. The next morning, the Fellowship wakes up, Sonya, the perfect robot cat, apologizes to the group for the raid last night. He also tells the group that they are in Paradapia, an ideal country similar to
    Utopia, just as Nobita had requested. At Nobita's insistence, Sonya took his group of friends to the Cathedral to ask them to let the three sages Sci, Poli, and Culti, the creators of Paradapia, stay in Paradapia, and he was accepted. Every day, while Nobita, Shizuka, Gian, and Suneo go to the academy to be more "perfect" like the
    residents there, Doraemon helps Sonya patrol all of Paradapia. Sonya reveals his past to Doraemon as a pet companion cat who was abused and neglected by his former owner before meeting the three sages.`;
  let actors = `Mizuta Wasabi\nSeki Tomokazu\nKimura Subaru\nOhara Megumi\nKakazu Yumi`;
  let languages = `Japanese\nEnglish\nVietnamese`;
  const [button, setButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setButton(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <Header uNavigation={uNavigation} />
      <ScrollView>
        <Video
          source={{
            uri: 'https://pmandono.com/doraemon_movie_utopia.mp4',
          }}
          controls
          resizeMode={'contain'}
          style={Styles.video}
          paused
        />
        <View style={Styles.title}>
          <Text style={Styles.name}>
            Doraemon Movie 42: Nobita's Sky Utopia (2023)
          </Text>
          <View style={Styles.categories}>
            <View style={Styles.category}>
              <Text style={Styles.categoryText}>Anime</Text>
            </View>
            <View style={Styles.category}>
              <Text style={Styles.categoryText}>Fantasy</Text>
            </View>
          </View>
        </View>
        <View style={Styles.information}>
          <Image
            source={require('../assets/img/doraemon_vungdatlytuongtrenbautroi.jpg')}
            style={Styles.image}
          />
          <Text style={Styles.description}>
            {description ? `${description.substring(0, 310)}...` : ''}
          </Text>
        </View>
        <View style={Styles.subInformation}>
          <View style={Styles.informationRow}>
            <Text style={[Styles.whiteText, Styles.sWidth]}>Studio</Text>
            <Text style={Styles.whiteText}>Shin-Ei Animation</Text>
          </View>
          <View style={Styles.informationRow}>
            <Text style={[Styles.whiteText, Styles.sWidth]}>Director</Text>
            <Text style={Styles.whiteText}>Doyama Takumi</Text>
          </View>
          <View style={Styles.informationRow}>
            <Text style={[Styles.whiteText, Styles.sWidth]}>Actor</Text>
            <Text style={Styles.whiteText}>{actors}</Text>
          </View>
          <View style={Styles.informationRow}>
            <Text style={[Styles.whiteText, Styles.sWidth]}>Language</Text>
            <Text style={Styles.whiteText}>{languages}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.footer}>
        <PrimaryButton
          disabled={button}
          value={'Buy ticket'}
          customStyle={Styles.button}
          onPress={() => uNavigation.navigate('Options')}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171723',
  },
  video: {
    width: width,
    height: width * 0.5625,
  },
  title: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  categories: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    width: 80,
    borderRadius: 8,
    backgroundColor: 'rgba(196, 196, 196, 0.07)',
    marginRight: 8,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  information: {
    paddingTop: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  image: {
    height: 192,
    width: 128,
    borderRadius: 8,
  },
  description: {
    color: '#FFFFFF',
    flexWrap: 'wrap',
    width: width - 128 - 16 * 2,
    paddingLeft: 8,
  },
  informationRow: {
    paddingTop: 8,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  sWidth: {
    width: 150,
  },
  footer: {
    backgroundColor: 'rgba(1,1,1,0)',
  },
  button: {
    marginTop: 0,
    marginBottom: 8,
  },
});

export default Detail;
