import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {setDestination} from '../slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {NavFavorites} from './NavFavorites';
import {Icon} from 'react-native-elements';

export const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'RideOptionsCard'>
    >();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning Bendik</Text>
      <View>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            debounce={400}
            styles={toInputBoxStyles}
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  desription: data.description,
                }),
              );
              navigation.navigate('RideOptionsCard');
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`text-row bg-white justify-evenly py-2 
        mt-auto boarder-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awsome" color="white" size={16} />
          <Text style={tw`text-center text-white text-xl`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awsome" color="black" size={16} />
          <Text style={tw`text-center text-black text-xl`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
