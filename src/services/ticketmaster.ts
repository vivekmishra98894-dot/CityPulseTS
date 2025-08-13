import axios from 'axios';

const API_KEY = process.env.TICKETMASTER_API_KEY || '';
const BASE = 'https://app.ticketmaster.com/discovery/v2';

export const searchEvents = async (keyword: string, city: string) => {
  if (!API_KEY) {
    return {
      _embedded: {
        events: [
          { id: '1', name: 'Mock Concert', dates: { start: { localDate: '2025-08-20' } }, _embedded: { venues: [{ name: city || 'Mock City' }] } }
        ]
      }
    };
  }
  const res = await axios.get(`${BASE}/events.json`, { params: { apikey: API_KEY, keyword, city } });
  return res.data;
};

export const getEventById = async (id: string) => {
  if (!API_KEY) {
    return { id, name: 'Mock Concert', description: 'This is a mock event', _embedded: { venues: [{ name: 'Mock Venue' }] } };
  }
  const res = await axios.get(`${BASE}/events/${id}.json`, { params: { apikey: API_KEY } });
  return res.data;
};
