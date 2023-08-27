import propTypes from "prop-types";

function MovieDetail ({id, coverImage, title, description, genres, year, runtime, rating, like_count}) {
    return (<div>
        <img src={coverImage} alt={title} />
        <h2>{title}</h2>
        <div>
            <span>{year}년</span>
            <span>{runtime}분</span>
        </div>
        <div>
            <div id="rate">
                <span>평점 : </span>
                <span>{rating}</span>
            </div>
            <div id="like">
                <span>👍</span>
                <span>{like_count}</span>
            </div>
        </div>
        <p>{description}</p>
        <ul>
        {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
    </div>);
}

MovieDetail.propTypes = {
    id : propTypes.number.isRequired,
    coverImage : propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    year: propTypes.number.isRequired,
    runtime: propTypes.number.isRequired,
    rating : propTypes.number.isRequired,
    like_count : propTypes.number.isRequired,
}




export default MovieDetail