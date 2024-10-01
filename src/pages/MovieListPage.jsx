import { useState } from "react"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"

export default function MovieListPage() {

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filmesFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <h2>Veja a lista completa de filmes</h2>
            <input
                type="text"
                name="search"
                id="search"
                className="text-black"
                value={search}
                onChange={handleSearch}
            />

            <div className="flex">
                {
                    filmesFiltrados.length > 0 ?
                        filmesFiltrados
                            .map(movie => (
                                <MovieCard key={movie.id} {...movie} />
                            ))
                        :
                        <p>Filme não encontrado</p>
                }
            </div>
        </>
    )
}