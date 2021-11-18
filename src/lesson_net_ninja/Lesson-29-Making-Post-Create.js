import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('none')
    const [successMessage, setSuccessMessage] = useState('')
    const [failedMessage, setFailedMessage] = useState('')

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const blog = {
            title, body, author
        }

        setIsLoading(true)

        async function addBlog() {
            const response = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            })

            if (response.ok === true) {
                setSuccessMessage('Blog Successfully Added!')
                setTitle('')

                setIsLoading(false)

            } else {
                setFailedMessage('Something Went Wrong!')
            }
        }

        addBlog().catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    }

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            {error && <p>{error}</p>}
            {failedMessage && <p>{failedMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
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
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Loading. . .</button>}
            </form>
        </div>
    );
}

export default Create;