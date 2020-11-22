const SERVER_ADDR = 'http://localhost:8080';

const fetcher = async (method, url, body) => {
  try {
    const response = await fetch(SERVER_ADDR + url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body ? JSON.stringify(body) : null,
    });
    if (response && (response.status === 200 || response.status === 201)) {
      const responseText = await response.text();
      if (isJson(responseText)) {
        return JSON.parse(responseText);
      } else {
        throw new Error({
          message: 'Bad JSON response',
          response: response.data,
        });
      }
    } else {
      throw new Error({
        message: 'Bad response Status',
        status: response.status,
      });
    }
  }
  catch (err) {
    throw new Error(err);
  }
};

const isJson = (json) => {
  try {
    JSON.parse(json);
  }
  catch {
    return false;
  }
  return true;
};

// Api for requests
const requestsApi = {

  getAll: async () => {
    try {
      const res = await fetcher('GET', '/requests');
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const res = await fetcher('GET', '/requests/' + id);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  addNew: async (data) => {
    try {
      const res = await fetcher('POST', '/requests', data);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  editById: async (id, data) => {
    try {
      const res = await fetcher('PUT', '/requests/' + id, data);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const res = await fetcher('DELETE', '/requests/' + id);
      if (res) return res;
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
      const res = await fetcher('GET', '/clients');
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const res = await fetcher('GET', '/clients/' + id);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  addNew: async (data) => {
    try {
      const res = await fetcher('POST', '/clients', data);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  editById: async (id, data) => {
    try {
      const res = await fetcher('PUT', '/clients/' + id, data);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const res = await fetcher('DELETE', '/clients/' + id);
      if (res) return res;
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
      const res = await fetcher('GET', '/carriers');
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  getOne: async (id) => {
    try {
      const res = await fetcher('GET', '/carriers/' + id);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  addNew: async (data) => {
    try {
      const res = await fetcher('POST', '/carriers', data);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  editById: async (id, data) => {
    try {
      const res = await fetcher('PUT', '/carriers/' + id, data);
      if (res) return res;
      return null;
    }
    catch(err) {
      throw new Error(err);
    }
  },
  deleteById: async (id) => {
    try {
      const res = await fetcher('DELETE', '/carriers/' + id);
      if (res) return res;
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