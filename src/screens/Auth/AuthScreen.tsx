import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const AuthScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const { signIn } = useAuth();

  return (
    <View style={{flex:1, padding:12}}>
      <Text style={{fontSize:18, fontWeight:'700'}}>Login (Mock)</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={{borderWidth:1,padding:8,marginTop:12}} />
      <Button title="Sign In" onPress={async ()=>{ await signIn(name || 'User'); navigation.goBack(); }} />
    </View>
  );
};

export default AuthScreen;
