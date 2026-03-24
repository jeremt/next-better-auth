import {auth} from "@/lib/auth";
import {db} from "@/lib/db/db";
import {posts} from "@/lib/db/schema";
import {headers} from "next/headers";

export default async function Home() {
    const session = await auth.api.getSession({headers: await headers()});
    const postsResult = await db
        .select({
            id: posts.id,
            name: posts.name,
            description: posts.description,
        })
        .from(posts);
    if (!session?.user) {
        return <div>Not connected</div>;
    }
    return (
        <div className="flex flex-col gap-2 w-2xl max-w-full">
            <h1>Posts</h1>
            {session.user.id}
            {session.user.name}
            {session.user.email}
            {postsResult.map((post) => (
                <div className="p-4 border w-full" key={post.id}>
                    <h2 className="text-xl">{post.name}</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}
