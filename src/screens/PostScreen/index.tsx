import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuthenticator} from '@aws-amplify/ui-react-native';
import tw from 'tailwind-react-native-classnames';
import {RootStackParamList} from '../../../App';
import {CheckBox, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setDestination} from '../../slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useDispatch, useSelector} from 'react-redux';
import {createPost} from '../../graphql/mutations';
import {generateClient} from 'aws-amplify/api';

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '80%',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

const initialFormState = {
  description: '',
  estimatedValue: 0,
  createdBy: '',
  createdById: '',
  createdAt: null,
  includesGlass: false,
  glasBid: null,
  containsNonPantableItems: false,
  latitude: 0,
  longitude: 0,
};

const userSelector = (context: {user: any}) => [context.user];

export const PostScreen = () => {
  const {user} = useAuthenticator(userSelector);
  const [location, setLocation] = useState<{lat: number; lng: number}>();
  const [address, setAddress] = useState<string>('');
  if (user.username !== null) {
    initialFormState.createdBy = user.username;
    initialFormState.createdById = user.userId;
  }
  const [bags, setBags] = useState<string>('Hvor mange poser med pant?');

  const [estimatedValue, setEstimatedValue] =
    useState<string>('Estimert verdi?');

  const [containesChecked, setContainesChecked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [formState] = useState(initialFormState);
  const client = generateClient();

  async function addPost() {
    try {
      if (!formState.createdBy || !location || !location.lat || !location.lng)
        return;
      const postInput = {
        description: 'test',
        estimatedValue: formState.estimatedValue,
        createdById: user.userId,
        includesGlass: formState.includesGlass,
        address: address,
        longitude: location.lng,
        latitude: location?.lat,
        createdAt: new Date().toISOString(),
      };

      const res = await client.graphql({
        query: createPost,
        variables: {
          input: postInput,
        },
      });
      console.log('res:', res);
    } catch (err) {
      console.log('error creating post:', err);
    }
  }

  const changeChecked = () => {
    setContainesChecked(!containesChecked);
  };

  return (
    <View style={tw`p-5`}>
      <View style={tw`h-1/2`}>
        <Text style={tw`text-center py-5 text-xl`}>
          {'God dag Bendik Haugen'}
        </Text>
        <GooglePlacesAutocomplete
          placeholder="Hvor skal panten hentes?"
          debounce={400}
          styles={toInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details) => {
            const location = details?.geometry.location;
            setLocation(location);
            setAddress(data.description);
            dispatch(
              setDestination({
                location: details?.geometry.location,
                desription: data.description,
              }),
            );
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <TextInput
          onChangeText={setBags}
          value={bags}
          style={toInputBoxStyles.input}
        />
        <TextInput
          onChangeText={setEstimatedValue}
          value={estimatedValue}
          style={toInputBoxStyles.input}
        />
        <View style={toInputBoxStyles.checkboxContainer}>
          <Text style={toInputBoxStyles.label}>
            Inneholder posen flasker eller bokser som ikke kan pantes?
          </Text>
          <CheckBox
            checked={containesChecked}
            onPress={() => changeChecked()}
            style={toInputBoxStyles.checkbox}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            addPost();
          }}>
          <View
            style={[
              tw`flex-row mr-4 rounded-full p-4`,
              {backgroundColor: '#FF7F50'},
            ]}>
            <Icon name="create" type="ionicon" color="black" size={32} />
            <Text style={tw`ml-2 mt-1 text-lg font-bold`}>Legg ut Annonse</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
