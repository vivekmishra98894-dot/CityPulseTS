import { useEffect, useState } from 'react';
import { saveFavorites, loadFavorites } from '../services/storage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Record<string, any>>({});

  useEffect(() => {
    (async () => {
      const data = await loadFavorites();
      setFavorites(data || {});
    })();
  }, []);

  const toggle = async (event:any) => {
    const id = event.id;
    const next = { ...favorites };
    if (next[id]) delete next[id];
    else next[id] = event;
    setFavorites(next);
    await saveFavorites(next);
  };

  const isFav = (id:string) => !!favorites[id];

  return { favorites: Object.values(favorites), toggle, isFav };
};
