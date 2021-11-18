import { useState } from 'react'
import BlogList from './BlogList.Component'


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "lorem ipsum...", author: "Onin", id: 1 },
        { title: 'Welcome party', body: "lorem ipsum...", author: "Billy", id: 2 },
        { title: 'Web dev top tips', body: "lorem ipsum...", author: "Mario", id: 3 }
    ])

    const handleDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList blogsProp={blogs} titleProp="All Blogs" handleDeleteBlog={handleDeleteBlog} />
            {/* <BlogList blogsProp={blogs.filter((blog) => blog.author === "Onin")} titleProp="Onin Blogs" /> */}
        </div >
    );
}

export default Home;