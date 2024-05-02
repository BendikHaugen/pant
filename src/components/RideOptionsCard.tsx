import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {RootStackParamList} from '../../App';
import {selectOrigin, selectTravelTimeInformation} from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

// Smarter solution needed
const SURGE_CHARGE_RATE = 1.5;

export const RideOptionsCard = () => {
  const origin = useSelector(selectOrigin);
  const [selected, setSelected] = React.useState<null | (typeof data)[0]>(null);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'NavigateCard'>
    >();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-3 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}>
          <Icon name="chevron-left" type="font-awsome" />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {travelTimeInformation?.distance?.text}
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {id, title, multiplier, image}, item}) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id ? 'bg-gray-200' : ''
            }`}
            onPress={() => setSelected(item)}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{uri: image}}
            />
            <View style={tw`-ml-8`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selected ? 'bg-gray-300' : ''}`}
          disabled={!selected}>
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title || 'a ride'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
