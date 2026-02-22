import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

// Owns directors state and shares it with all nested director/movie routes.
const DirectorContainer = () => {
    const [directors, setDirectors] = useState([])

    // Adds a newly created director to local state for instant UI updates.
    const addDirector = (newDirector) => {
        setDirectors((currentDirectors) => [...currentDirectors, newDirector])
    }

    // Replaces a single director after editing nested movie data.
    const updateDirector = (updatedDirector) => {
        setDirectors((currentDirectors) =>
            currentDirectors.map((director) =>
                director.id === updatedDirector.id ? updatedDirector : director
            )
        )
    }

    // Loads initial directors list from the JSON server.
    useEffect(() => {
        fetch("http://localhost:4000/directors")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch directors") }
            return r.json()
        })
        .then(setDirectors)
        .catch(console.log)
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                <Outlet context={{ directors, addDirector, updateDirector }} />
            </main>
        </>
    );
}

export default DirectorContainer;
