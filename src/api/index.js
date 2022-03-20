import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004',
});

export const getAllStores = () => {
  const result = instance.get('/lojas');
  return result;
};

export const getAllgetGeneralInformations = () => {
  const result = instance.get('/informacoesGerais');
  return result;
};

export const getAllsales = () => {
  const result = instance.get('/vendas');
  return result;
};