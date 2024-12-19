import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div>
            <h1>Create a new post</h1>
            <form>
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