import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const getArticles = async () => {
  const response = await api.get('webs/');
  return response.data;
};

export const getArticle = async id => {
  const response = await api.get(`/webs/${id}/`);
  return response.data;
};

export const createArticle = async data => {
  const response = await api.post('/webs/', data);
  return response.data;
};

export const updateArticle = async (id, data) => {
  const response = await api.put(`/webs/${id}/`, data);
  return response.data;
};

export const deleteArticle = async id => {
  await api.delete(`/webs/${id}/`);
};
