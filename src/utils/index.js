export const formatDateTime = (datetime) => {
  return datetime.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) + ' ' + datetime.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' });
};

export const formatDateTimeFull = (datetime) => {
  return datetime.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }) + ' в ' + datetime.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' });
};

export const formatPhoneNumber = (phone) => {
  return phone.replace(/7(\d{3})(\d{2})(\d{2})(\d{3})/,'($1) $2-$3-$4');
};