import { sum } from "../components/sum";
test("sum of two numbers", () => {
  // We are expecting the sum of 8 and 4 to be 11 (I know it's wrong).
  expect(sum(8, 4)).toBe(12);
});