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
        router.push('/posts');
    }

    return (
        <div>
            <h1>Create a new post</h1>
            {error && <p className="text-red-500 m-3">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;