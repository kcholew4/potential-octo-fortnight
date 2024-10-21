import { describe, expect, test } from "bun:test";
import { checkRansomNote } from "../ransomNote";

describe("checkRansomNote()", () => {
  test("returns true when message and magazine is empty", () => {
    const TEST_MESSAGE = "";
    const TEST_MAGAZINE = "";

    const result = checkRansomNote(TEST_MESSAGE, TEST_MAGAZINE);

    expect(result).toBe(true);
  });

  test("returns false when only magazine is empty", () => {
    const TEST_MESSAGE = "Give me your money!";
    const TEST_MAGAZINE = "";

    const result = checkRansomNote(TEST_MESSAGE, TEST_MAGAZINE);

    expect(result).toBe(false);
  });

  test("returns true when only message is empty", () => {
    const TEST_MESSAGE = "";
    const TEST_MAGAZINE = "This is a magazine.";

    const result = checkRansomNote(TEST_MESSAGE, TEST_MAGAZINE);

    expect(result).toBe(true);
  });

  test("returns true if message can be constructed from magazine", () => {
    const TEST_MESSAGE = "I will find you";
    const TEST_MAGAZINE = "you will find him";

    const result = checkRansomNote(TEST_MESSAGE, TEST_MAGAZINE);

    expect(result).toBe(true);
  });

  test("returns false if message cannot be constructed from magazine", () => {
    const TEST_MESSAGE = "hello";
    const TEST_MAGAZINE = "world";

    const result = checkRansomNote(TEST_MESSAGE, TEST_MAGAZINE);

    expect(result).toBe(false);
  });
});
