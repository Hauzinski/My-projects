function formatLowerCamelCaseToCase(value: string) {
  return value
    .split('')
    .map((char) => (char === char.toUpperCase() ? ` ${char.toLowerCase()}` : char))
    .join('');
}

export { formatLowerCamelCaseToCase };
