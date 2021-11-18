import { Link } from "react-router-dom"

const NotFounPage = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to="/">
                Back to home page
            </Link>
        </div>
    );
}

export default NotFounPage;