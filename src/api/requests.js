// FAKE

const TIMEOUT = 500;
const PROBABILITY = 2;
let counter = 102;

const requestsData = [
  {
    id: 101,
    number: 'A01',
    datetime: '03.02.2020 11:32',
    client: 'ООО "Альфа"',
    carrier: 'Алексеев В.Е.',
    carrierPhone: '+7(900)12-34-567',
    code: '174899',
    comments: 'comments comments comments'
  },
  {
    id: 102,
    number: 'A180',
    datetime: '11.11.2020 9:02',
    client: 'ЗАО "Гамма"',
    carrier: 'Иванов И.И.',
    carrierPhone: '+7(900)12-34-567',
    code: '174899',
    comments: 'comments comments comments'
  }
];

/// METHODS

export const getAll = (limit = 0, page = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILITY) {
        resolve(requestsData);
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
        const result = requestsData.find(item => item.id === id);
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
        requestsData.push({
          ...data,
          id: ++counter,
          number: 'A' + counter,
          datetime: Date.now(),
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
        const index = requestsData.findIndex(item => item.id === id);
        if (!~index && index >= 0) {
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
}

export const deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < PROBABILITY) {
        const index = requestsData.findIndex(item => item.id === id);
        if (!~index && index >= 0) {
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
}