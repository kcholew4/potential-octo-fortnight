import { FileDoesNotExistError, InvalidArgumentsError } from "./errors";
import { checkRansomNote } from "./ransomNote";
import { getMagazineContent, getMessageContent } from "./input";

let message, magazine;

try {
  message = await getMessageContent();
  magazine = await getMagazineContent();
} catch (error) {
  if (error instanceof InvalidArgumentsError) {
    console.error("Example usage: bun run main.ts mocks/message.txt mocks/magazine.txt");
  }

  if (error instanceof FileDoesNotExistError) {
    console.error(`File '${error.getFilePath()}' does not exist`);
  }

  process.exit(1);
}

console.log(checkRansomNote(message, magazine) ? "true" : "false");
