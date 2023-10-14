/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />
// Need to load types before extending them
import "@remix-run/server-runtime";
declare module "@remix-run/server-runtime" {
    export interface AppLoadContext {
        env: {
            SOME_SECRET: string;
        };
    }
}

