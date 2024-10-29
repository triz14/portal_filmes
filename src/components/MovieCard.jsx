import { Link } from "react-router-dom";

export default function MovieCard({id, title, backdrop_path, poster_path}) {
    
    const handleFavorito = ({id, title, poster_path}) => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
        const isFavorite = favoritos.some(filme => filme.id === id)

        if(isFavorite){
            favoritos = favoritos.filter(filme => filme.id != id)
        }else{
            favoritos.push({id, title, poster_path})
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos))

    }
    
    return(
        <div className="flex flex-col text-center">
            {/* <h2>{title}</h2> */}
            {/* <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} /> */}
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
            <Link to={`/movies/${id}`}>Saiba mais</Link>
            <button onClick={() => handleFavorito({id, title, poster_path})}>Adicionar favoritos</button>
        </div>
    )

}