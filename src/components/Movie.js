import propTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie ({id, coverImage, title, year, summary, genres}) {
    return <div className={styles.movie}>
    <img src={coverImage} alt={title} className={styles.movie__img} />
    <h2 className={styles.movie__title}><Link to={`/detail/${id}`}>{title}</Link></h2>
    <h3 className={styles.movie__year}>{year}</h3>
    <p>{summary.length > 250 ? `${summary.slice(0, 250)}...`: summary}</p>
    <ul className={styles.movie__genres}>
      {genres && genres.map((genre) => <li key={genre}>{genre}</li>)}
    </ul>
  </div>;
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    coverImage : propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,

}

export default Movie