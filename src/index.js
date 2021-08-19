const neutralizeThreat = (input) => {
  if (typeof input !== 'string') {
    throw Error('Input must be a string');
  }
  return input;
};

module.exports = {
  neutralizeThreat,
};
