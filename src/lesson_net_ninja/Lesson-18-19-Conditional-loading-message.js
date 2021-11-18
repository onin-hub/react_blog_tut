
import { useState, useEffect } from 'react'
import BlogList from './BlogList.Component'


const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        //i use setime to show the Loading node
        setTimeout(() => {

            async function fetchBlogsData() {

                const data = await fetch('http://localhost:8000/blogs')
                if (!data.ok) {
                    throw Error('Cant fetch data from database. Something went wrong call the system support')
                }
                if (data.ok) {
                    setErrorMessage(null)
                }
                const transformData = await data.json()
                setBlogs(transformData)
                setIsLoading(false)
            }
            fetchBlogsData().catch(error => {
                if (error) {
                    setErrorMessage(error.message)
                    setIsLoading(false)
                }
            })
        }, 1000);
    }, [])

    return (
        <div className="home">
            {isLoading && <div>Loading . . .</div>}
            {errorMessage && <p >{errorMessage}</p>}
            {blogs && <BlogList blogsProp={blogs} titleProp="All Blogs" />}
            {/* <BlogList blogsProp={blogs.filter((blog) => blog.author === "Onin")} titleProp="Onin Blogs" /> */}

        </div >
    );
}

export default Home;