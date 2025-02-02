/* eslint-disable react/prop-types */
import { useContext } from "react"
import GlobalContext from "../Contetx/GlobalContext"
import { useNavigate } from "react-router-dom"

function MovieCard({ movie }) {
    let { apiUrl } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <>
            <div className="my-card">
                <img src={`${apiUrl}${movie.image}`} alt="" />
                <div className="text">
                    <h5>{movie.title}</h5>
                    <p className="my-1">{movie.director}</p>
                    <p className="mt-1">{movie.genre}</p>                    
                    <button onClick={() => navigate(`/movies/${movie.id}`)} className="btn btn-primary">Dettagli</button>
                </div>
            </div>
        </>

    )
}
export default MovieCard