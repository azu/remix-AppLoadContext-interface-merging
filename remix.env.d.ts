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

