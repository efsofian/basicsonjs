function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

async function test(title, cb) {
  try {
    await cb();
    console.log(`${title} passed!`);
  } catch (e) {
    console.log(`${title} failed`);
  }
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

test("sum test", () => {
  const result = sum(2, 4);
  const expected = 7;
  expect(result).toBe(expected);
});

test("sub test", () => {
  const result = sub(5, 2);
  const expected = 4;
  expect(result).toBe(expected);
});
