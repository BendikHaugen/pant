import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Options} from '../../components/Options';
import {Dimensions} from 'react-native';

export const HomeScreen = () => {
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={tw`bg-white h-full flex-1`}>
      <Image
        style={{
          width: width,
          height: 300,
          resizeMode: 'cover',
        }}
        source={require('../../assets/Logo.png')}
      />
      {/*<GooglePlacesAutocomplete
          placeholder="Where from?"
          minLength={2}
          enablePoweredByContainer={false}
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />*/}
      <View style={tw`pt-5 justify-center items-center`}>
        <Options />
      </View>
    </SafeAreaView>
  );
};
