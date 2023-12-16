import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface userProps {
    _id: string | undefined;
    imageId: string | undefined;
    name: string | undefined;
    email: string | undefined;
    messages: any[];
}

export async function handleSubmit(e: any, router: AppRouterInstance, avatarId: string) {
    e.preventDefault();
    console.log(e.target[1].value);
    try {
        await fetch("http://localhost:8080/auth", {
            method: "POST",
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                imageId: `https://robohash.org/${avatarId}.png`,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        router.push("/chat")
    } catch (err) {
        console.log(err);
    }
}