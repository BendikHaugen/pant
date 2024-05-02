import React, {useEffect, useState} from 'react';
import {View, Platform, PermissionsAndroid} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Geolocation from 'react-native-geolocation-service';
import {Map} from '../../components/Map';

type location = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
} | null;

export const MapScreen = () => {
  const [location, setLocation] = useState<location>(null);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location to show it on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      return new Promise((resolve, reject) => {
        Geolocation.requestAuthorization('whenInUse')
          .then(status => {
            if (status === 'granted') {
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch(error => reject(error));
      });
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        console.error(error);
        setLocation(null); // Handle error state appropriately
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    requestLocationPermission().then(hasPermission => {
      if (hasPermission) {
        getLocation();
      }
    });
  }, []);

  return (
    <View>
      <View style={tw`flex-row items-center p-5 h-full`}>
        <Map />
      </View>
    </View>
  );
};
