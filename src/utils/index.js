export const formatDateTime = (datetime) => {
  const dt = new Date(datetime);
  return dt.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + dt.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' });
};

export const formatDateTimeFull = (datetime) => {
  const dt = new Date(datetime);
  return dt.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' }) + ' в ' + dt.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' });
};

export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/,'($1) $2-$3-$4');
};