const neutralizeThreat = (input) => {
  if (typeof input !== 'string') {
    throw Error('Input must be a string');
  }

  if (input === '') {
    return input;
  }

  return input.replace(/O/i, '');
};

module.exports = {
  neutralizeThreat,
};
