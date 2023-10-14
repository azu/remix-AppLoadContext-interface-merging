# declare merging break `loader`'s return type

- [remix.env.d.ts](./remix.env.d.ts) extends `AppLoadContext` using declare merging
- [app/routes/_index.tsx](./app/routes/_index.tsx) uses `useLoaderData<typeof loader>()`, but it returns type is `Serialize<T>`. 

## Usage

```
npm ci
npm run typecheck
```

Broken `remix.env.d.ts`

```ts
/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />
// It breaks loader's return type
declare module "@remix-run/server-runtime" {
    export interface AppLoadContext {
        env: {
            SOME_SECRET: string;
        };
    }
}
```


```

25     assertType<Expect<typeof message, string>>();
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in app/routes/_index.tsx:25
```

## Workaround

`import "@remix-run/server-runtime";` before extends `AppLoadContext` using declare merging.

```ts
/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />
import "@remix-run/server-runtime";
declare module "@remix-run/server-runtime" {
    export interface AppLoadContext {
        env: {
            SOME_SECRET: string;
        };
    }
}

```
