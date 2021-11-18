import { useState } from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "lorem ipsum...", author: "Onin", id: 1 },
        { title: 'Welcome party', body: "lorem ipsum...", author: "Billy", id: 2 },
        { title: 'Web dev top tips', body: "lorem ipsum...", author: "Mario", id: 3 }
    ])

    const handleClickSetBlogs = () => {
        setBlogs([])
    }

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
            <button onClick={handleClickSetBlogs} hidden>Set the blogs</button>
        </div >
    );
}

export default Home;