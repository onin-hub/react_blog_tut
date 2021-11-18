import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import useBlogsFetchData from '../../hooks/useBlogsFetchData.hook'

const BlogDetails = () => {
    const [successMessage, setSuccessMessage] = useState('')
    const history = useHistory()
    /**
     * useParams is a react hook
     */
    const { blogID } = useParams()
    const url = `http://localhost:8000/blogs/${blogID}`
    // const componentNameProp = null
    const { data: blog, isLoading, errorMessage } = useBlogsFetchData(url)

    const handleDelete = () => {
        async function deleteBlog() {

            const response = await fetch('http://localhost:8000/blogs/' + blogID, {
                method: 'DELETE',
            })
            if (response.ok === true) {
                setSuccessMessage('Blog successfully deleted. Redirect to home page. . .')
                setTimeout(() => {
                    history.push('/')
                }, 3000);

            }
        }

        deleteBlog().catch((error) => {
            console.log(error.message);
        })

    }

    return (
        <div className="blog-details">
            <h2>Blog details</h2>
            {isLoading && <div>Loading . . .</div>}
            {errorMessage && <p >{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
            {blog && <div>{blog.body}</div>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default BlogDetails;