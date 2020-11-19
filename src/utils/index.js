export const formatDateTime = (datetime) => {
  const dt = new Date(datetime);
  const locale = 'ru-RU';
  const dateOptions = { month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: 'numeric' };

  return dt.toLocaleDateString(locale, dateOptions) + ' ' + dt.toLocaleTimeString(locale, timeOptions);
};