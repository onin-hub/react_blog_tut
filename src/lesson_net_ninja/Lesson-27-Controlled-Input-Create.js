import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('none')

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form>
                <label> Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                <label> Blog body:</label>
                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    required
                />
                <label> Blog author:</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    required
                >
                    <option value="none"> -- select an author -- </option>
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                <button>Add Blog</button>

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;