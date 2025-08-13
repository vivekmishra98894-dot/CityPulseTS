import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import FavoriteButton from '../../components/FavoriteButton';
import { useFavorites } from '../../hooks/useFavorites';

const EventDetailsScreen = ({ route, navigation }: any) => {
  const { id, event } = route.params || {};
  const { isFav, toggle } = useFavorites();
  const e = event || { id, name: 'Unknown Event', _embedded: { venues: [{ name: '' }] } };

  return (
    <ScrollView style={{flex:1, padding:12}}>
      <Text style={{fontSize:20, fontWeight:'700'}}>{e.name}</Text>
      <Text style={{color:'#555', marginTop:8}}>{e._embedded?.venues?.[0]?.name}</Text>
      <Text style={{marginTop:12}}>{e.description || 'No description available.'}</Text>
      <View style={{marginTop:20}}>
        <FavoriteButton isFav={isFav(e.id)} onPress={() => toggle(e)} />
      </View>
      <View style={{marginTop:20}}>
        <Button title="Open Profile" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ScrollView>
  );
};

export default EventDetailsScreen;
