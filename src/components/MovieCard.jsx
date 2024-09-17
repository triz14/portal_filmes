import { Link } from "react-router-dom";

export default function MovieCard({titulo, id, imagem_destaque}) {
    return(
        <div>
            <h2>{titulo}</h2>
            <img src={`/${imagem_destaque}`} alt="" />
            <Link to={`movies/${id}`}>Saiba mais</Link>
        </div>
    )

}