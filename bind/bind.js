Function.prototype.bind = function(thisArg, ...fixedArgs) {
  const func = this;
  return function(...args) {
    return func.apply(thisArg, [...fixedArgs, ...args]);
  };
};
