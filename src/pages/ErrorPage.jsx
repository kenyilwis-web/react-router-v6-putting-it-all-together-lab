import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

// Fallback page shown for any unmatched route.
function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back home</Link>
      </main>
    </>
  )
}

export default ErrorPage
