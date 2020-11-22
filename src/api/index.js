import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 3000,
});

// Api for requests
const requestsApi = {

  getAll: async (params) => {
    try {
      const res = await instance.get('requests', { params });
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const res = await instance.get('requests/' + id);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  addNew: async (data) => {
    try {
      const res = await instance.post('requests', data);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  editById: async (id, data) => {
    try {
      const res = await instance.put('requests/' + id, data);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const res = await instance.delete('requests/' + id);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },

};
// end API for requests

// Api for clients
const clientsApi = {

  getAll: async () => {
    try {
      const res = await instance.get('clients');
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const res = await instance.get('clients/' + id);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  addNew: async (data) => {
    try {
      const res = await instance.post('clients', data);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  editById: async (id, data) => {
    try {
      const res = await instance.put('clients/' + id, data);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const res = await instance.delete('clients/' + id);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },

};
// end API for clients

// Api for carriers
const carriersApi = {

  getAll: async () => {
    try {
      const res = await instance.get('carriers');
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const res = await instance.get('carriers/' + id);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  addNew: async (data) => {
    try {
      const res = await instance.post('carriers', data);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  editById: async (id, data) => {
    try {
      const res = await instance.put('carriers/' + id, data);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const res = await instance.delete('carriers/' + id);
      if (res && res.data) return res.data;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },

};
// end API for carriers

const api = {
  requests: requestsApi,
  clients: clientsApi,
  carriers: carriersApi,
};

export default api;