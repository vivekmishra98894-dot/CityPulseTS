import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const EventCard = ({ event, onPress, children } : any) => {
  return (
    <TouchableOpacity onPress={() => onPress(event)} style={{ padding:12, borderBottomWidth:1, borderColor:'#eee' }}>
      <Text style={{ fontSize:16, fontWeight:'600' }}>{event.name}</Text>
      <Text style={{ color:'#666' }}>{event._embedded?.venues?.[0]?.name || ''}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default EventCard;
