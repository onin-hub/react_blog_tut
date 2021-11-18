import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('none')

    const handleSubmit = (event) => {
        event.preventDefault()
        const blog = {
            title, body, author
        }
        console.log(blog);
    }
    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
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
                    height="100px"
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
            </form>
        </div>
    );
}

export default Create;