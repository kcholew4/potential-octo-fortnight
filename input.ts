import { FileDoesNotExistError, InvalidArgumentsError } from "./errors";

const MESSAGE_ARGS_POSITION = 2;
const MAGAZINE_ARGS_POSITION = 3;

const extractFilePathFromArgs = (index: number) => {
  const name = Bun.argv[index];

  if (!name) {
    throw new InvalidArgumentsError();
  }

  return name;
};

const getFileContent = async (path: string) => {
  const file = Bun.file(path);

  if (!(await file.exists())) {
    throw new FileDoesNotExistError(path);
  }

  return await file.text();
};

export const getMessageContent = () => {
  const messagePath = extractFilePathFromArgs(MESSAGE_ARGS_POSITION);
  return getFileContent(messagePath);
};

export const getMagazineContent = () => {
  const magazinePath = extractFilePathFromArgs(MAGAZINE_ARGS_POSITION);
  return getFileContent(magazinePath);
};
