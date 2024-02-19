import { read } from "../bool";

test("Testing 'read' function", () => {
  expect(read(undefined)).toBe(undefined);
  expect(read(null)).toBe(undefined);
  expect(read(NaN)).toBe(undefined);
  expect(read({})).toBe(undefined);
  expect(read([])).toBe(undefined);
  expect(read("")).toBe(undefined);
  expect(read("text")).toBe(undefined);
  expect(read("1,2")).toBe(undefined); // must be "1.2"

  expect(read(1)).toBe(undefined);
  expect(read(false)).toBe(false);
  expect(read(true)).toBe(true);
  expect(read(4 === 4)).toBe(true);
  expect(read(4 !== 4)).toBe(false);
});
