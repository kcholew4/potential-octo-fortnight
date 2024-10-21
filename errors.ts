export class InvalidArgumentsError extends Error {}

export class FileDoesNotExistError extends Error {
  private path: string;

  constructor(path: string) {
    super();
    this.path = path;
  }

  public getFilePath() {
    return this.path;
  }
}
