import { describe, it, expect } from "vitest";

import { tryFn } from "../src";

function succeedingFn<T>(value: T) {
  return value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function failingFn<T>(_value: T) {
  throw new Error("The function failed.");
}

async function succeedingAsyncFn<T>(value: T) {
  // TODO timeout
  return value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function failingAsyncFn<T>(_value: T) {
  // TODO timeout
  throw new Error("The function failed.");
}

describe("tryFn", () => {
  describe("try catch", () => {
    it("should return the value", () => {
      const result = tryFn(
        () => succeedingFn("success"),
        (error) => {
          throw error;
        }
      );

      expect(result).toBe("success");
    });

    it("should throw an error", () => {
      expect(() => {
        tryFn(
          () => failingFn("success"),
          (error) => {
            throw error;
            // throw new Error("Invalid encoding");
          }
        );
      }).toThrowError("The function failed.");
    });

    it("should throw an error", () => {
      const result = tryFn(
        () => failingFn("success"),
        (error) => {
          console.log(error);
        }
      );

      expect(result).toBe(undefined);
    });

    // Async
    it("should return the value async", async () => {
      const result = await tryFn(
        () => succeedingAsyncFn("success"),
        (error) => {
          throw error;
        }
      );

      expect(result).toBe("success");
    });
  });

  describe("try catch finally", () => {
    // TODO
    it("should return the value", () => {
      expect(true).toBe(true);
    });
  });

  describe("try finally", () => {
    // TODO
    it("should return the value", () => {
      expect(true).toBe(true);
    });
  });
});
