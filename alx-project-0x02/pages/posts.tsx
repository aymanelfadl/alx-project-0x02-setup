import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Layout from "@/components/layout/Layout";
import { PostProps } from "@/interfaces";

interface APIPost {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data: APIPost[]) => {
        const formatted = data.map((post) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formatted);
      });
  }, []);

  return (
    <Layout>
      <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </Layout>
  );
}
