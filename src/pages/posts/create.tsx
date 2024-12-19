import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!title.trim() || !content.trim()){
            setError('Both fields are required.');
            return;
        }

        const newPost = {
            id: Date.now().toString(),
            title,
            published: new Date().toISOString(),
            content
        }
        console.log("New Post", newPost);
        alert("New Post created successfully. Redirecting to the posts page");
        router.push('/posts');
    }

    return (
        <div>
            <Link href="/posts" className="relative inline-flex items-center justify-center p-0.5 m-5 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Back to posts
                </span>
            </Link>
            <div className="max-w-2xl mx-auto mt-8 p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Create a new post</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Title:</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Content:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="mt-1 h-48 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button 
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;