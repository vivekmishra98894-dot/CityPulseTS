import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../hooks/useFavorites';

const ProfileScreen = ({ navigation }: any) => {
  const { user, signOut } = useAuth();
  const { favorites } = useFavorites();

  return (
    <View style={{flex:1, padding:12}}>
      <Text style={{fontSize:18, fontWeight:'700'}}>Profile</Text>
      <Text style={{marginTop:8}}>Name: {user?.name || 'Guest'}</Text>
      <Button title={user ? 'Sign Out' : 'Sign In'} onPress={() => navigation.navigate('Auth')} />
      <Text style={{marginTop:12, fontSize:16, fontWeight:'600'}}>Favorites</Text>
      <FlatList data={favorites} keyExtractor={(i:any)=>i.id} renderItem={({item})=> (<View style={{padding:8}}><Text>{item.name}</Text></View>)} ListEmptyComponent={() => <Text style={{padding:8}}>No favorites yet.</Text>} />
    </View>
  );
};

export default ProfileScreen;
