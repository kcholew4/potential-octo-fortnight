import { describe, expect, test } from "bun:test";
import { getLetterOccurrences } from "../letters";

describe("getLetterOccurrences()", () => {
  test("returns a map of characters to the number of times each character appears in the string", () => {
    const TEST_STRING = "Hello";
    const EXPECTED_VALUE = new Map([
      ["h", 1],
      ["e", 1],
      ["l", 2],
      ["o", 1],
    ]);

    const result = getLetterOccurrences(TEST_STRING);

    expect(result instanceof Map).toBe(true);
    expect(result).toEqual(EXPECTED_VALUE);
  });

  test("returns an empty map for an empty string", () => {
    const TEST_STRING = "";
    const EXPECTED_VALUE = new Map();

    const result = getLetterOccurrences(TEST_STRING);

    expect(result).toEqual(EXPECTED_VALUE);
  });

  test("is case insensitive", () => {
    const TEST_STRING = "AAaaBbCCC";
    const EXPECTED_VALUE = new Map([
      ["a", 4],
      ["b", 2],
      ["c", 3],
    ]);

    const result = getLetterOccurrences(TEST_STRING);

    expect(result).toEqual(EXPECTED_VALUE);
  });

  test("counts only alphanumeric (a-z, A-Z, 0-9) characters", () => {
    const TEST_STRING = "!! This is a test !! sentence. And here's another...";
    const EXPECTED_VALUE = new Map([
      ["e", 7],
      ["s", 5],
      ["t", 5],
      ["n", 4],
      ["h", 3],
      ["i", 2],
      ["a", 3],
      ["r", 2],
      ["c", 1],
      ["d", 1],
      ["o", 1],
    ]);

    const result = getLetterOccurrences(TEST_STRING);

    expect(result).toEqual(EXPECTED_VALUE);
  });

  test("returns an empty map for a string with no alphanumeric characters", () => {
    const TEST_STRING = "!@#$%^&*()";
    const EXPECTED_VALUE = new Map();

    const result = getLetterOccurrences(TEST_STRING);

    expect(result).toEqual(EXPECTED_VALUE);
  });

  test("counts occurrences of a single alphanumeric character", () => {
    const TEST_STRING = "a";
    const EXPECTED_VALUE = new Map([["a", 1]]);

    const result = getLetterOccurrences(TEST_STRING);

    expect(result).toEqual(EXPECTED_VALUE);
  });
});
