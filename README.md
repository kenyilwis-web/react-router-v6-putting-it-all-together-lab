# Movie Directory Application

Client-side routed React application for browsing directors and their movies, adding new records, and navigating nested detail pages without full page reloads.

## Features

- Browse a list of directors and each director's movies.
- Open director detail pages at dynamic routes.
- Open movie detail pages nested under each director.
- Add a new director and redirect directly to that director page.
- Add a new movie and redirect directly to that movie page.
- Gracefully handle unknown routes with a 404 page.

## Tech Stack

- React 18
- React Router v6
- Vite
- JSON Server
- Vitest + Testing Library

## Routing Structure

- `/` → Home
- `/about` → About
- `/directors` → DirectorContainer
  - index route → DirectorList
  - `/directors/new` → DirectorForm
  - `/directors/:id` → DirectorCard
    - `/directors/:id/movies/new` → MovieForm
    - `/directors/:id/movies/:movieId` → MovieCard
- `*` → ErrorPage

## Screenshot

Add your final UI screenshot at `public/movie-directory-screenshot.png`, then it will render below:

![Movie Directory App Screenshot](public/movie-directory-screenshot.png)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the API server:

   ```bash
   npm run server
   ```

3. In a second terminal, start the app:

   ```bash
   npm run dev
   ```

4. Open the local Vite URL shown in terminal.

## Testing

Run tests:

```bash
npm run test -- --run
```

The suite validates routing, nested route rendering, and navigation behavior.

## Project Notes

- Parent/child state sharing is implemented with `useOutletContext` to avoid prop drilling.
- Programmatic redirects after successful form submission are handled with `useNavigate`.
