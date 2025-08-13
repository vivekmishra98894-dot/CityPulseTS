import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const FavoriteButton = ({ isFav, onPress } : any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding:8 }}>
      <Text>{isFav ? '★ Remove' : '☆ Favorite'}</Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
