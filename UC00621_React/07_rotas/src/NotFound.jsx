import { Link } from "react-router-dom";


function NotFound() {
    return (
        <>

            <h1>404 Not Found</h1>
            <a href="/home">Back Home a </a>
            <Link to="/home">Back Home - Link </Link>

        </>
    );
}

export default NotFound;