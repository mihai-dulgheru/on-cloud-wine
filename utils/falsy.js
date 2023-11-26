const falsy = (value) => {
  if (typeof value === 'string') {
    const falsyValues = [
      'false',
      'null',
      'undefined',
      '0',
      '-0',
      '0n',
      'NaN',
      '""',
    ];
    return !value || value.trim() === '' || falsyValues.includes(value);
  }

  return !value;
};

export default falsy;
