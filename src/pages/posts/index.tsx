import { GetServerSideProps } from "next";
import Link from "next/link";

interface Post {
    id: string;
    title: string;
    published: string;
    content: string;
  }
  
  interface PostsPageProps {
    posts: Post[];
  }

const PostsPage = ({posts}: PostsPageProps) => {
    return (
        <div className="p-4">
            <div className="flex justify-end">
            <Link href="/posts/create" className="relative inline-flex items-center justify-center p-0.5 mb-4 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    New post
                </span>
            </Link>
            </div>
            <h1 className="text-center text-2xl font-bold mb-6">Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <Link
                        className="border rounded-md p-4 shadow-md hover:shadow-lg transition-shadow"
                        href={`posts/${post.id}`}
                        key={post.id}
                    >
                        <div>
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-sm text-gray-500">{new Date(post.published).toLocaleDateString()}</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content.substring(0, 350) + " ..."
                                }}
                            ></div>
                        </div>  
                    </Link>              
                ))}
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const BLOG_ID = process.env.BLOG_ID;
    const API_KEY = process.env.API_KEY;
    try{
        const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
        );

        const data = await response.json();
        const posts = data.items.map((post: Post) => ({
            id: post.id,
            title: post.title,
            published: post.published,
            content: post.content,
        }));
        return { props: { posts } };
    } catch(error){
        console.log(error);
        return { props: { posts: [] } };
    }
};

export default PostsPage;