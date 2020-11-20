/// FAKE DB DATA

const TIMEOUT = 1000;
const PROBABILITY = 2;

let requestCounter = 3;
let clientsCounter = 3;
let carriersCounter = 3;

const requestsData = [
  {
    id: 1,
    datetime: Date('2020-11-10T14:48:00'),
    client: 1,
    carrier: 1,
    comments: 'комментарий к первой заявке'
  },
  {
    id: 2,
    datetime: Date('2020-11-10T12:20:00'),
    client: 2,
    carrier: 2,
    comments: 'комментарий ко второй заявке'
  },
  {
    id: 3,
    datetime: Date('2020-11-10T11:05:00'),
    client: 3,
    carrier: 3,
    comments: ''
  },
];

const clientsData = [
  { id: 1, name: 'ООО "Альфа"', phone: '79001234567' },
  { id: 2, name: 'АО "Бетта"', phone: '79119845274' },
  { id: 3, name: 'ИП Иванов И.И.', phone: '79220022999' },
];

const carriersData = [
  { id: 1, name: 'Петров А.С.', phone: '79121111103', code: '124364' },
  { id: 2, name: 'Зайцев С.А.', phone: '79040101104', code: '123464' },
  { id: 3, name: 'Гусев И.Ф.', phone: '79000202109', code: '134364' },
];

/// END FAKE DB DATA

// API for requests
const requestsApi = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      const mappedData = requestsData.map(item => ({
        id: item.id,
        datetime: item.datetime,
        client: clientsData.find(i => i.id === item.client).name,
        carrier: carriersData.find(i => i.id === item.carrier).name,
        phone: carriersData.find(i => i.id === item.carrier).phone,
        code: carriersData.find(i => i.id === item.carrier).code,
      }));

      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          resolve(mappedData);
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  getOne: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const result = requestsData.find(item => item.id === id);
          if (result && result.id) {
            result.client = clientsData.find(item => item.id === result.client);
            result.carrier = carriersData.find(item => item.id === result.carrier);
            resolve(result);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  addNew: (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          requestsData.push({
            ...data,
            id: ++requestCounter,
            datetime: Date.now(),
          })
          resolve(requestCounter);
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  editById: (id, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const index = requestsData.findIndex(item => item.id === id);
          if (index !== -1 && index >= 0) {
            requestsData[index] = {...data};
            resolve(requestsData[index]);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const index = requestsData.findIndex(item => item.id === id);
          if (index !== -1 && index >= 0) {
            requestsData.splice(index, 1);
            resolve(index);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

};
// end API for requests

// API for clients
const clientsApi = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          resolve(clientsData);
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  getOne: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const result = clientsData.find(item => item.id === id);
          if (result && result.id) {
            resolve(result);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  addNew: (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          clientsData.push({
            ...data,
            id: ++clientsCounter,
          })
          resolve(clientsCounter);
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  editById: (id, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const index = clientsData.findIndex(item => item.id === id);
          if (index !== -1 && index >= 0) {
            clientsData[index] = {...data};
            resolve(clientsData[index]);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const index = clientsData.findIndex(item => item.id === id);
          if (index !== -1 && index >= 0) {
            clientsData.splice(index, 1);
            resolve(index);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

};
// end API for clients

// API for carriers
const carriersApi = {

  getAll: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          resolve(carriersData);
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  getOne: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const result = carriersData.find(item => item.id === id);
          if (result && result.id) {
            resolve(result);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  addNew: (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          carriersData.push({
            ...data,
            id: ++carriersCounter,
          })
          resolve(carriersCounter);
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  editById: (id, data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const index = carriersData.findIndex(item => item.id === id);
          if (index !== -1 && index >= 0) {
            carriersData[index] = {...data};
            resolve(carriersData[index]);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < PROBABILITY) {
          const index = carriersData.findIndex(item => item.id === id);
          if (index !== -1 && index >= 0) {
            carriersData.splice(index, 1);
            resolve(index);
          } else {
            resolve(null);
          }
        } else {
          reject(new Error('PROBABILITY ERROR'));
        }
      }, TIMEOUT);
    });
  },

};
// end API for carriers

const api = {
  requests: requestsApi,
  clients: clientsApi,
  carriers: carriersApi,
};

export default api;