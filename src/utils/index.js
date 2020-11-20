export const formatDateTime = (datetime) => {
  const dt = new Date(datetime);
  return dt.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) + ' ' + dt.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' });
};

export const formatPhoneNumber = (phone) => {
  return phone.replace(/7(\d{3})(\d{2})(\d{2})(\d{3})/,'($1) $2-$3-$4');
};

export const generateRandomForTextFieldIDs = () => {
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  return randomInteger(10000, 99999);
};