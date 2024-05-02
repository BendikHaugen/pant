import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../App';
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';
import {DataObject} from './types';

const data: DataObject[] = [
  {
    id: '1',
    title: 'Plukk opp Pant',
    image: '../assets/Flaske.png',
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Legg ut for henting',
    image: '../assets/Pose.png',
    screen: 'PostScreen',
  },
];

export const Options = () => {
  // Find Pickups or place a pickup of pant
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'MapScreen' | 'PostScreen'>
    >();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={tw``}
      renderItem={({item}) => (
        <TouchableOpacity
          style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-4 w-40`}
          onPress={() => navigation.navigate(item.screen)}>
          <View>
            {item.id === '1' ? (
              <Image
                source={require('../assets/Flaske.png')}
                style={{width: 120, height: 120, resizeMode: 'contain'}}
              />
            ) : (
              <Image
                source={require('../assets/Pose.png')}
                style={{width: 120, height: 120, resizeMode: 'contain'}}
              />
            )}
            <Text style={tw`mt-2 text-lg font-semibold`}> {item.title}</Text>
            <Icon
              type="antdesign"
              color="white"
              backgroundColor={'#FF7F50'}
              name="arrowright"
              style={tw`p-2 rounded-full w-10 mt-4`}
            />
          </View>
        </TouchableOpacity>
      )}></FlatList>
  );
};
