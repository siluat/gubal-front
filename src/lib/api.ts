import axios from 'axios';

const client = axios.create();

const AWS_S3_ENDPOINT = `https://gubal.s3.ap-northeast-2.amazonaws.com`;

export const getItemSummaries = () => client.get('/data/ItemSummaries.json');

export const getItemDetail = (id: number) =>
  client.get(`${AWS_S3_ENDPOINT}/data/item/${id}.json`);
