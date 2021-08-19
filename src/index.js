const neutralizeThreat = (input) => {
  if (typeof input !== 'string') {
    throw Error('Input must be a string');
  }

  if (input === '') {
    return input;
  }

  return input.replace(/[A|E||I|O|U]/gi, '');
};

module.exports = {
  neutralizeThreat,
};
