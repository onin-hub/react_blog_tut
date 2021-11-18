
import useBlogsFetchData from './useBlogsFetchData'
import BlogList from './BlogList.Component'

const Home = () => {
    console.log("Home component Load");
    const { data: blogs, isLoading, errorMessage } = useBlogsFetchData('http://localhost:8000/blogs')

    return (
        <div className="home">
            {isLoading && <div>Loading . . .</div>}
            {errorMessage && <p >{errorMessage}</p>}
            {blogs && <BlogList blogsProp={blogs} titleProp="All Blogs" />}
        </div >
    );
}

export default Home;