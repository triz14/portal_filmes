import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

export default function MovieListPage() {

    const [search, setSearch] = useState('')
    const [filmes, setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        setIsLoading(true)
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then( data => setFilmes(data.results))
        .catch( erro => console.log(erro))
        .finally( () => setIsLoading(false))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))

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

            <div className="flex flex-wrap justify-around gap-3">
                {
                    isLoading? <p>carregando...</p>:
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