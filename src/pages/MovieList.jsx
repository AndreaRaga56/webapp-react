import { useContext } from "react"
import GlobalContext from '../Contetx/GlobalContext'
import MovieCard from "../components/MovieCard"

function MovieList() {
    let { movies } = useContext(GlobalContext)

    return (
        <>
            <h1>Sei nella MovieList</h1>
            <div className="mt-4 card-container">
                <label htmlFor="tagFiltro" className="form-label my-1 ">Filtra</label>
                <select id="tagFiltro" name="tagFiltro" required className="form-select">
                    <option value="" disabled>Seleziona...</option>

                </select>
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