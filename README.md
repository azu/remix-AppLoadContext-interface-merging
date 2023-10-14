# declare merging break `loader`'s return type

- [remix.env.d.ts](./remix.env.d.ts) extends `AppLoadContext` using declare merging
- [app/routes/_index.tsx](./app/routes/_index.tsx) uses `useLoaderData<typeof loader>()`, but it returns type is `Serialize<T>`. 

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
