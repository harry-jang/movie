import propTypes from "prop-types";
import {Link} from "react-router-dom"

function Movie ({coverImage, title, summry, genres}) {
    return <div>
    <img src={coverImage} alt={title} />
    <h2><Link to="/movie">{title}</Link></h2>
    <p>{summry}</p>
    <ul>
      {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
    </ul>
  </div>;
}

Movie.propTypes = {
    coverImage : propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,

}

export default Movie