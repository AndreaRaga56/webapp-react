import { useContext } from "react"
import GlobalContext from '../Contetx/GlobalContext'

function MovieList() {
    let {movies} = useContext(GlobalContext)

    return (
        <>
            <h1>Sei nella MovieList</h1>
            <div className="mt-3">
                {
                    movies.map((curMovie, i) => {
                        return (
                            <div key={i}>
                                {curMovie.title}
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}
export default MovieList