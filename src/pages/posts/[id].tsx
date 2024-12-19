import { GetServerSideProps } from "next";
import Link from "next/link";

type PostProps = {
    post: {
        id: string;
        title: string;
        published: string;
        content: string;
    }
}

const PostPage = ({ post }: PostProps) => {
    return (
        <div>
            <Link href="/posts">Back to posts</Link>
            <h1>{post.title}</h1>
            <p>{post.published}</p>
            <div>{post.content}</div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params!;
    const BLOG_ID = process.env.BLOG_ID;
    const API_KEY = process.env.API_KEY;
    const postId = id;

    const response = await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`
    );
    const data = await response.json();
    return { props: { post: data } }
}

export default PostPage;