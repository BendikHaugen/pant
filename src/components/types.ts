import {AuthUser} from 'aws-amplify/auth';

type MarkerData = {
  longitude: number;
  latitude: number;
  address: string;
  estimatedValue: number;
  includesGlass?: boolean | null;
};

type DataObject = {
  id: string;
  title: string;
  image: string;
  screen: 'MapScreen' | 'PostScreen';
};

interface AuthContext {
  user: AuthUser | null;
  signOut: () => void;
}

export type {MarkerData, DataObject, AuthContext};
