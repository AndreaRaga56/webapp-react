import { useContext, useEffect, useState } from "react";
import GlobalContext from "../Contetx/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function SinglePage() {
    let { id } = useParams();

    id = parseInt(id)
    const navigate = useNavigate()
    let [curMovie, setCurMovie] = useState(null)
    let next = id + 1;
    let prev = id - 1;

    const { movies, apiUrl } = useContext(GlobalContext)

    const stelline = (voto) => {
        const array = [1, 2, 3, 4, 5]
        return array.map((cur) => {
            if (voto >= cur) {
                return <FontAwesomeIcon className="stellina" key={cur} icon={solidStar} />
            } else {
                return <FontAwesomeIcon className="stellina" key={cur} icon={regularStar} />
            }
        })
    };

    useEffect(() => {
        console.log("partito")
        axios.get(`${apiUrl}/movies/${id}`).then((resp) => {
            setCurMovie(resp.data.data)
        }).catch((err) => {
            if (err.status === 404) {
                navigate("/not-found")
            }
        })
    }, [id])

    const printRece = () => {
        let rece
        if (curMovie.reviews.length <= 5) {
            rece = curMovie.reviews
        } else {
            for (let i = 0; i <= 5; i++) {
                rece.push(curMovie.reviews[i])
            }
        }
        const newArray = rece.map((curRece) => (<>
            <div key={curRece.id} className="rece-card">
                <div className="name">{curRece.name}</div>
                <div><strong>Vote: </strong> {stelline(curRece.vote)}</div>
                <div className="my-text">{curRece.text}</div>
            </div>
        </>))

        console.log(newArray)
        return newArray
    }


    return (
        <>
            <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>Indietro</button>


            {curMovie && (<>
                <div className="big-card mt-2">
                    <img src={`${apiUrl}${curMovie.image}`} alt="" />
                    <div className="text">
                        <h1 className="mt-3">{curMovie.title}</h1>
                        <h3 className="my-2">{curMovie.director}</h3>
                        <p className="my-2">{curMovie.genre}</p>
                        <p className="mt-2">{curMovie.abstract}</p>
                    </div>
                </div>

                <div className="d-flex gap-2 mt-2">
                    <button disabled={prev === 0} className="btn btn-secondary mt-2" onClick={() => navigate(`/movies/${prev}`)}>Precedente</button>
                    <button disabled={next >= movies.length} className="btn btn-secondary mt-2" onClick={() => navigate(`/movies/${next}`)}>Successivo</button>
                </div>

                <section>
                    <h3 className="mt-3">Recensioni</h3>
                    <div className="mt-2">
                        {printRece()}
                    </div>

                </section>
            </>)}
        </>
    );
}

export default SinglePage