import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Home'), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:24,fontWeight:'700'}}>City Pulse</Text>
      <ActivityIndicator style={{marginTop:20}} />
    </View>
  );
};

export default SplashScreen;
