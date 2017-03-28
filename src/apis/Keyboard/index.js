const emptyFunction = function() {};

const Keyboard = {
  addListener() {
    return {
      remove: emptyFunction
    }
  },
};

module.exports = Keyboard;
