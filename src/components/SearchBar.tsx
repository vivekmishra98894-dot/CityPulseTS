import React from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ keyword, city, setKeyword, setCity, onSearch } : any) => {
  return (
    <View style={{ flexDirection:'row', padding:8 }}>
      <TextInput placeholder="Keyword" value={keyword} onChangeText={setKeyword} style={{ flex:1, borderWidth:1, marginRight:8, padding:8 }} />
      <TextInput placeholder="City" value={city} onChangeText={setCity} style={{ flex:1, borderWidth:1, marginRight:8, padding:8 }} />
      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

export default SearchBar;
