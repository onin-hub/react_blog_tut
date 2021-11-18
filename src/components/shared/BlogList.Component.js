import { Link } from "react-router-dom";
// const BlogList = (props) => {
//     const blogs = props.blogsProp
//     const title = props.titleProp

//     return (
//         <div className="blog-list">
//             <h2>{title}</h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by: {blog.author}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

/**
 * @param blogsProp @param titleProp
 * @description is destructuting come from props params
 */

const BlogList = ({ blogsProp, titleProp }) => {

    return (
        <div className="blog-list" >
            <h2>{titleProp}</h2>
            {
                blogsProp.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`blog-details/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}



export default BlogList;