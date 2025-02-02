import { useContext } from "react"
import GlobalContext from '../Contetx/GlobalContext'
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"

function MovieList() {
    let { movies } = useContext(GlobalContext)

    return (
        <>
            <h1>Sei nella MovieList</h1>
            <div className="mt-4 card-container">
                {
                    movies.map((curMovie, i) => {
                        return (
                            <>
                                <div key={i}>
                                    <MovieCard movie={curMovie} />
                                </div>

                            </>
                        )
                    })
                }

            </div>
        </>

    )
}
export default MovieList