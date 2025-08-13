import { useState } from 'react';
import { searchEvents } from '../services/ticketmaster';

export const useEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = async (keyword: string, city: string) => {
    setLoading(true);
    try {
      const res = await searchEvents(keyword, city);
      const ev = res?._embedded?.events || [];
      setEvents(ev);
    } catch (e) {
      console.warn(e);
      setEvents([]);
    } finally { setLoading(false); }
  };

  return { events, loading, fetch };
};
