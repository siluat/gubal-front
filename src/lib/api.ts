import axios from 'axios';

const client = axios.create();

export const getItemSummaries = () => client.get('/data/ItemSummaries.json');
