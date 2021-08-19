const neutralizeThreat = (input) => {
  return input.replace(/[A|E||I|O|U]/gi, '');
};

module.exports = {
  neutralizeThreat,
};
