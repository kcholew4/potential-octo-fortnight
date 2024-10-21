const isAlphaNumeric = (str: string) => /^[a-zA-Z0-9]*$/.test(str);

export const getLetterOccurrences = (text: string) => {
  const occurrences = new Map<string, number>();

  for (const letter of text) {
    if (!isAlphaNumeric(letter)) {
      continue;
    }

    const count = occurrences.get(letter);

    if (!count) {
      occurrences.set(letter, 1);
    } else {
      occurrences.set(letter, count + 1);
    }
  }

  return occurrences;
};
