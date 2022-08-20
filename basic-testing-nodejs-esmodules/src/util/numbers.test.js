import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string to number of type number", () => {
  // Arrange
  const input = "3";

  // Act
  const result = transformToNumber(input);

  // Assert
  //console.log(result);
  expect(result).toBe(+input);
  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transformable values", () => {
  const input = "tres";
  const input2 = {};
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  // console.log(result);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
