// FAKE

const TIMEOUT = 500;
const PROBABILITY = 2;
let counter = 10;

const clientsData = [
  {
    id: 8,
    name: 'ООО "Альфа"',
    phone: '79001234567'
  },
  {
    id: 9,
    name: 'ЗАО "Омега"',
    phone: '79001234567'
  },
  {
    id: 10,
    name: 'ИП Иванов. И.И.',
    phone: '79001234567'
  },
];

/// METHODS

export const getAll = (limit = 0, page = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILITY) {
        resolve(clientsData);
      } else {
        reject(new Error('PROBABILITY ERROR'));
      }
    }, TIMEOUT);
  });
}

export const getOne = (id) => {
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
}

export const addNew = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILITY) {
        clientsData.push({
          ...data,
          id: ++counter,
        })
        resolve(counter);
      } else {
        reject(new Error('PROBABILITY ERROR'));
      }
    }, TIMEOUT);
  });
}

export const editOne = (id, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILITY) {
        const index = clientsData.findIndex(item => item.id === id);
        if (!~index && index >= 0) {
          clientsData[index] = {
            id : clientsData.id,
            ...data
          };
          resolve(clientsData[index]);
        } else {
          resolve(null);
        }
      } else {
        reject(new Error('PROBABILITY ERROR'));
      }
    }, TIMEOUT);
  });
}

export const deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILITY) {
        const index = clientsData.findIndex(item => item.id === id);
        if (!~index && index >= 0) {
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
}