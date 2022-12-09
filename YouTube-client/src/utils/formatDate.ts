function formatDate(value: string) {
  const date = new Date(value);
  const locale = 'en-US';

  return date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

export { formatDate };
