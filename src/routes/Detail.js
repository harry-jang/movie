import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail(fg) {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovieDetail(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, [])
    
    return (
        <div>
        {loading ? <h1>Loading...</h1> : (
            <div>
                <MovieDetail
                    id={movieDetail.id}
                    coverImage={movieDetail.large_cover_image}
                    title={movieDetail.title_long}  
                    year={movieDetail.year}
                    runtime={movieDetail.runtime}
                    genres={movieDetail.genres}
                    description={movieDetail.description_full}
                    rating={movieDetail.rating}
                    like_count={movieDetail.like_count}


                />
            </div>
        )}
        </div>
    );
}

export default Detail;