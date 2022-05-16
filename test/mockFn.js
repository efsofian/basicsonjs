const modPath = require.resolve("../moduleToImport");
require.cache[modPath] = {
  id: modPath,
  filename: modPath,
  loaded: true,
  exports: {
    methodToMock: fn((p1, p2) => p1),
  },
};

function fn(imp) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return imp(...args);
  };
  mockFn.mock = {
    calls: [],
  };
  mockFn.mockImplementation = (newImp) => (imp = newImp);
  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

// cleanup
delete require.cache[modPath];
