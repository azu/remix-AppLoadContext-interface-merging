import type { DataFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta: MetaFunction = ({ context }: LoaderFunctionArgs) => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export const loader = () => {
    return json({
            message: "Hello from loader!",
        }
    )
}

type Expect<A, E> = A extends E ? (E extends A ? true : false) : false;
const assertType = <T extends true>() => undefined as unknown as T;
export default function Index() {
    const { message } = useLoaderData<typeof loader>()
    //      ^? It will be string but SerializeForm<T> by declare mering in remix.env.d.ts
    console.log("message", message);
    assertType<Expect<typeof message, string>>();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Welcome to Remix</h1>
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/blog"
                        rel="noreferrer"
                    >
                        15m Quickstart Blog Tutorial
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/jokes"
                        rel="noreferrer"
                    >
                        Deep Dive Jokes App Tutorial
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    );
}
