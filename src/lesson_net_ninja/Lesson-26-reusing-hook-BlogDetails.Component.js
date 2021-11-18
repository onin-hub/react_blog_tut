import { useParams } from "react-router-dom"
import useBlogsFetchData from '../../hooks/useBlogsFetchData.hook'

const BlogDetails = () => {
    /**
     * useParams is a react hook
     */
    const { blogID } = useParams()
    const url = `http://localhost:8000/blogs/${blogID}`
    // const componentNameProp = null
    const { data: blog, isLoading, errorMessage } = useBlogsFetchData(url)

    return (
        <div className="blog-details">
            <h2>Blog details - {blogID}</h2>
            {isLoading && <div>Loading . . .</div>}
            {errorMessage && <p >{errorMessage}</p>}
            {blog && <div>{blog.body}</div>}
        </div>
    );
}

export default BlogDetails;