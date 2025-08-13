import React, { useState } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import SearchBar from '../../components/SearchBar';
import EventCard from '../../components/EventCard';
import { useEvents } from '../../hooks/useEvents';
import { useFavorites } from '../../hooks/useFavorites';

const HomeScreen = ({ navigation }: any) => {
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');
  const { events, fetch } = useEvents();
  const { toggle, isFav } = useFavorites();

  const onSearch = async () => {
    await fetch(keyword, city);
  };

  const open = (event:any) => navigation.navigate('Details', { id: event.id, event });

  return (
    <View style={{flex:1}}>
      <SearchBar keyword={keyword} city={city} setKeyword={setKeyword} setCity={setCity} onSearch={onSearch} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <FlatList
        data={events}
        keyExtractor={(i:any) => i.id}
        renderItem={({item})=> (
          <EventCard event={item} onPress={open}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:8}}>
              <Text>{item.dates?.start?.localDate || ''}</Text>
              <Button title={isFav(item.id) ? 'Remove' : 'Fav'} onPress={() => toggle(item)} />
            </View>
          </EventCard>
        )}
        ListEmptyComponent={() => <Text style={{padding:12}}>No events. Search to see results (mock data used if no API key).</Text>}
      />
    </View>
  );
};

export default HomeScreen;
