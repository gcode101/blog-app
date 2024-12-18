import { GetServerSideProps } from "next";

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
        <div className="text-center">
            <h1>Posts</h1>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="border rounded-md p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm text-gray-500">{new Date(post.published).toLocaleDateString()}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content,
                        }}
                    ></div>
                </div>                
            ))}
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
        const posts = data.items.map((post: any) => ({
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