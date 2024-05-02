import React from 'react';
import {Button, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {MarkerData} from './types';

const InfoCard = (data: MarkerData) => {
  return (
    <Card>
      <Card.Title title={data.address} />
      <Card.Content>
        <Text>{`Adresse: ${data.address}`}</Text>
        <Text>{`Estimert verdi: ${data.estimatedValue}`}</Text>
        <Text>
          {data.includesGlass
            ? 'Inneholder flasker uten pant'
            : 'Inneholder bare pantbare flasker'}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button title="Avtal Henting" onPress={() => {}} />
      </Card.Actions>
    </Card>
  );
};

export default InfoCard;
