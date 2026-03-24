import {db} from "@/lib/db/db";
import {posts} from "@/lib/db/schema";

export default async function Home() {
    const postsResult = await db
        .select({
            id: posts.id,
            name: posts.name,
            description: posts.description,
        })
        .from(posts);
    return (
        <div className="flex flex-col gap-2 w-2xl max-w-full">
            <h1>Posts</h1>
            {postsResult.map((post) => (
                <div className="p-4 border w-full" key={post.id}>
                    <h2 className="text-xl">{post.name}</h2>
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
}
