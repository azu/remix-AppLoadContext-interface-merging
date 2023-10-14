# declare merging break `loader`'s return type

## Usage

```
npm ci
npm run typecheck
```

```

25     assertType<Expect<typeof message, string>>();
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in app/routes/_index.tsx:25
```
