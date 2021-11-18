
import useBlogsFetchData from './hooks/useBlogsFetchData.hook'
import BlogList from './components/shared/BlogList.Component'

const Home = () => {
    const componentName = "Home.js Component"
    const url = 'http://localhost:8000/blogs'
    const { data: blogs, isLoading, errorMessage } = useBlogsFetchData(url, componentName)

    return (
        <div className="home">
            {isLoading && <div>Loading . . .</div>}
            {errorMessage && <p >{errorMessage}</p>}
            {blogs && <BlogList blogsProp={blogs} titleProp="All Blogs" />}
        </div >
    );
}

export default Home;