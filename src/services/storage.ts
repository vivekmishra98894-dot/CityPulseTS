import AsyncStorage from '@react-native-async-storage/async-storage';
const FAVORITES_KEY = 'favorites_v1';

export const saveFavorites = async (data: any) => {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
};

export const loadFavorites = async () => {
  const raw = await AsyncStorage.getItem(FAVORITES_KEY);
  return raw ? JSON.parse(raw) : {};
};
