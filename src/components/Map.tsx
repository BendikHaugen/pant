import {GOOGLE_MAPS_APIKEY} from '@env';
import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import MapView from 'react-native-maps';
import {MapMarker} from 'react-native-maps/lib/MapMarker';
import {useDispatch, useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../slices/navSlice';
import {generateClient} from 'aws-amplify/api';
import {MarkerData} from './types';
import {listPosts} from '../graphql/queries';

const markers: MarkerData[] = [
  {
    longitude: 10.74609 + 0.0221,
    latitude: 59.91273 + 0.0821,

    address: 'Code Street, London, UK',
    estimatedValue: 20,
    includesGlass: true,
  },
  {
    longitude: 10.74609,
    latitude: 59.91273,
    address: 'Dustegate, Oslo, Norway',
    estimatedValue: 10,
    includesGlass: false,
  },
  {
    longitude: 10.74609 + 0.0121,
    latitude: 59.91273,
    address: 'Horegate, Oslo, Norway',
    estimatedValue: 30,
    includesGlass: true,
  },
  {
    longitude: 10.74609 - 0.0221,
    latitude: 59.91273,
    address: 'DildoGate, Oslo, Norway',
    estimatedValue: 10,
    includesGlass: false,
  },
  {
    longitude: 10.74609,
    latitude: 59.91273 + 0.0621,
    address: 'Klammahaugen, Oslo, Norway',
    estimatedValue: 20,
    includesGlass: true,
  },
  {
    longitude: 10.74609,
    latitude: 59.91273 - 0.0421,
    address: 'herregudgate, Oslo, Norway',
    estimatedValue: 10,
    includesGlass: false,
  },
  {
    longitude: 10.74609 + 0.0221,
    latitude: 59.91273 - 0.0421,
    address: 'kjerreGate, Oslo, Norway',
    estimatedValue: 30,
    includesGlass: true,
  },
  {
    longitude: 10.74609 - 0.0121,
    latitude: 59.91273 + 0.0421,
    address: 'GangbangGate, Oslo, Norway',
    estimatedValue: 10,
    includesGlass: false,
  },
  {
    longitude: 10.74609 + 0.015,
    latitude: 59.91273 - 0.015,
    address: 'Pussy Street, London, UK',
    estimatedValue: 20,
    includesGlass: true,
  },
  {
    longitude: 10.74609 - 0.035,
    latitude: 59.91273 - 0.015,
    address: 'Bitch Street, London, UK',
    estimatedValue: 10,
    includesGlass: false,
  },
  {
    longitude: 10.74609 + 0.035,
    latitude: 59.91273 + 0.015,
    address: 'Lammemongogate, Oslo, Norway',
    estimatedValue: 30,
    includesGlass: true,
  },
  {
    longitude: 10.74609 - 0.035,
    latitude: 59.91273 + 0.015,
    address: 'Tomforideer, Oslo, Norway',
    estimatedValue: 10,
    includesGlass: false,
  },
];

export const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);
  const dispatch = useDispatch();
  const [displayAd, setDisplayAd] = useState<null | MarkerData>(null);
  const [posts, setPosts] = useState<MarkerData[]>([]);

  const client = generateClient();

  const closeAdInfo = () => setDisplayAd(null);

  const fecthPosts = async () => {
    try {
      const postsData = await client.graphql({
        query: listPosts,
      });
      const posts = postsData.data.listPosts.items;
      setPosts(posts);
    } catch (err) {
      console.log('error fetching posts', err);
    }
  };

  useEffect(() => {
    fecthPosts();
  }, []);

  useEffect(() => {
    if (!origin || !destination) return;
    // Zoom to fit markers
    if (mapRef.current !== null) {
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
      });
    }
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins?
      ${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <TouchableOpacity
      style={tw`flex-1`}
      activeOpacity={1}
      onPressOut={displayAd ? closeAdInfo : () => null}>
      <MapView
        style={tw`flex-1 h-1/2`}
        mapType="mutedStandard"
        ref={mapRef}
        initialRegion={{
          longitude: 10.74609,
          latitude: 59.91273,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {[...markers, ...posts].map((marker, index) => (
          <MapMarker
            key={`${marker.latitude}-${index}`}
            draggable={false}
            onPress={() => setDisplayAd(marker)}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
      {displayAd && (
        <View style={styles.adInfo}>
          <TouchableOpacity style={styles.closeButton} onPress={closeAdInfo}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text>{`Adresse: ${displayAd.address}`}</Text>
          <Text>{`Estimert verdi: ${displayAd.estimatedValue}`}</Text>
          <Text>
            {displayAd.includesGlass
              ? 'Inneholder flasker uten pant'
              : 'Inneholder bare pantbare flasker'}
          </Text>
          <Button title="Avtal Henting" onPress={closeAdInfo} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  adInfo: {
    position: 'absolute',
    bottom: '25%',
    left: '5%',
    right: '5%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
