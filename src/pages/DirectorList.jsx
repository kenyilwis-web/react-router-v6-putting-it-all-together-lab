import { Link, useOutletContext } from "react-router-dom"

const DirectorList = () => {
    const { directors } = useOutletContext()

    const displayDirectors = directors.map(d => (
        <li key={d.id}>
            <h2>
                <Link to={`/directors/${d.id}`}>{d.name}</Link>
            </h2>
            <ul>
                {d.movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/directors/${d.id}/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </li>
    ))

    return (
        <>
            <Link to="/directors/new">Add New Director</Link>
            <ul>
                {displayDirectors}
            </ul>
        </>
    );
}

export default DirectorList;
