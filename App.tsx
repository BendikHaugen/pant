import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {generateClient} from 'aws-amplify/api';
import {listPosts} from './src/graphql/queries';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {MapScreen} from './src/screens/MapScreen';
import {store} from './store';
import {HomeScreen} from './src/screens/HomeScrren';
import {PostScreen} from './src/screens/PostScreen';
import {
  Pressable,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';

interface Post {
  __typename: string;
  id: string;
  name: string;
  description?: string | null;
  estimatedValue?: number | null;
  posterId: string;
  createdAt: string;
  updatedAt: string;
}

export type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  PostScreen: undefined;
  RideOptionsCard: undefined;
  NavigateCard: undefined;
};

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context: {user: any}) => [context.user];

const SignOutButton = () => {
  const {user, signOut} = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut}>
      <Text>Hello, {user.username}! Click here to sign out!</Text>
    </Pressable>
  );
};
const client = generateClient();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const headerStyle = {
    backgroundColor: '#5cbcbc',
  };
  const tint = '#fff';
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetchPosts();
  });

  async function fetchPosts() {
    try {
      const postData = await client.graphql({
        query: listPosts,
      });
      const retreivedPosts = postData.data.listPosts.items;
      setPosts(['gaybois']);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    title: '',
                    headerStyle: headerStyle,
                    headerTintColor: tint,
                    headerTitleStyle: {fontWeight: 'bold'},
                  }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    title: 'Velg pant å plukke opp!',
                    headerStyle: headerStyle,
                    headerTintColor: tint,
                    headerTitleStyle: {fontWeight: 'bold'},
                  }}
                />
                <Stack.Screen
                  name="PostScreen"
                  component={PostScreen}
                  options={{
                    title: 'Legg ut en annonse!',
                    headerStyle: headerStyle,
                    headerTintColor: tint,
                    headerTitleStyle: {fontWeight: 'bold'},
                  }}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default withAuthenticator(App);
