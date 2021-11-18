
import { useState, useEffect } from 'react'
import BlogList from './BlogList.Component'


const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const handleDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    const [name, setName] = useState('Onin')

    useEffect(() => {
        async function fetchBlogsData() {
            const data = await fetch('http://localhost:8000/blogs')
            const transformData = await data.json()
            setBlogs(transformData)
        }
        fetchBlogsData()
    }, [])

    return (
        <div className="home">
            {/* @logical operator "ampersand" or we write &&
                this mean @blogs state, if blogs state false && left will not evaluate the right side component we include. 
                if @blogs state true they will evaluate the right side component and output it in the browser.

                in short they will out the <BlogList blogsProp={blogs} titleProp="All Blogs" handleDeleteBlog={handleDeleteBlog} />
                if the blogs state is true.
            */}

            {blogs && <BlogList blogsProp={blogs} titleProp="All Blogs" handleDeleteBlog={handleDeleteBlog} />}
            {/* <BlogList blogsProp={blogs.filter((blog) => blog.author === "Onin")} titleProp="Onin Blogs" /> */}
            <button onClick={() => setName('NINO')}>Change the name to NINO</button>
            <p>{name}</p>
        </div >
    );
}

export default Home;