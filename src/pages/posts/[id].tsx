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
        <div className="p-5">
            <Link href="/posts" className="relative inline-flex items-center justify-center p-0.5 mb-4 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Back to posts
                </span>
            </Link>          
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500">{new Date(post.published).toLocaleDateString()}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: post.content
                }}
            ></div>
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