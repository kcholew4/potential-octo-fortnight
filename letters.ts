const isAlphaNumeric = (str: string) => /^[a-zA-Z0-9]*$/.test(str);

export const getLetterOccurrences = (text: string) => {
  const occurrences = new Map<string, number>();

  for (const letter of text) {
    const lowerCaseLetter = letter.toLowerCase();

    if (!isAlphaNumeric(lowerCaseLetter)) {
      continue;
    }

    const count = occurrences.get(lowerCaseLetter);

    if (!count) {
      occurrences.set(lowerCaseLetter, 1);
    } else {
      occurrences.set(lowerCaseLetter, count + 1);
    }
  }

  return occurrences;
};
