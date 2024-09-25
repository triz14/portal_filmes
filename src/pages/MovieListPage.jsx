import { useState } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const [listaFilmes, setListaFilmes] = useState(movies)

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const filmesFilrados = movies.filter(filme => (filme.titulo).includes(search))
        setListaFilmes(filmesFilrados)
    }

    return(
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
                    listaFilmes
                    .map( movie =>(
                        <MovieCard key={movie.id} {...movie}/>
                    ))
                }
            </div>
        </>
    )
}