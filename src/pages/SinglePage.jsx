import { useContext, useState } from "react";
import GlobalContext from "../Contetx/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

function SinglePage() {
    let { id } = useParams();
    id=parseInt(id)
    const navigate = useNavigate()
    let [curElem, setCurElem] = useState(null)
    let next = id + 1;
    let prev = id - 1;

    const { apiUrl } = useContext(GlobalContext)





    return (
        <>
            <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>Indietro</button>
            <div className="d-flex gap-2">
                <button disabled={prev === 0} className="btn btn-secondary mt-2" onClick={() => navigate(`/movies/${prev}`)}>Precedente</button>
                <button className="btn btn-secondary mt-2" onClick={() => navigate(`/movies/${next}`)}>Successivo</button>
            </div>

            <div>
                <h1>Dettaglio del prodotto {id}</h1>
            </div>
        </>
    );
}

export default SinglePage