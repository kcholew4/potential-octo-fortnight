# Ransom Note

The problem comes down to counting the occurrences of each letter in message.txt and magazine.txt, and checking if every letter in message.txt occurs the same number of times or fewer than in magazine.txt.

- There are no restrictions regarding the input files, the program will only consider alphanumeric characters (A-Z, a-z, 0-9), everything else is ignored.
- The algorithm is case insensitive.
- If a message can be constructed from a magazine a programm will print `true`, otherwise `false`.
- Functions and edge cases are documented in `tests/` directory.
- Time complexity is O(n), because every character in the input is visited only once.

## Get started

The program was created using Typescript in Bun run-time.
Make sure you have [bun.sh](https://bun.sh/) installed. You can install it by running:

On Linux or macOS:

```
curl -fsSL https://bun.sh/install | bash
```

On Windows:

```
powershell -c "irm bun.sh/install.ps1 | iex"
```

### How to run

```bash
git clone https://github.com/kcholew4/potential-octo-fortnight.git

cd potential-octo-fortnight

bun install

bun run main.ts mocks/message.txt mocks/magazine.txt

```

### Running tests

```bash

bun test

```

