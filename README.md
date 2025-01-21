# TypeScript commands

- Generate the tsconfig.json file:

```bash
tsc --init
```

- Compile a specific .ts file:

```bash
tsc filename.ts
```

- Run TypeScript in watch mode (compiles files automatically on changes):

```bash
tsc -w
```

- Compile TypeScript files from a specific directory (add the following to tsconfig.json):

```bash
"include": [
"src"
] /* Ensures no .ts files outside the 'src' directory are compiled to JavaScript */
```

- Compile with source maps (to map compiled JS back to TS for debugging):

```bash
"sourceMap": true
```

- Compile to a specific target JavaScript version (e.g., ES6):

```bash
"target": "ES6"
```

- Specifies that your source files are inside the src folder.

```bash
"rootDir": "./src"
```

- Compile files and output to a specific directory:

```bash
"outDir": "./build"
```

- Enable strict type checking (recommended for better type safety):

```bash
"strict": true
```
