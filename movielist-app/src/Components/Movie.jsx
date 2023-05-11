export default function Movie(props) {
    return(
        <li className="list-group-item">
            <span>{props.movie.title}</span>
            {getStars(props.movie.rating)}
            <img src="images/delete.png" alt="Delete movie" className="btn btn-sm float-end" onClick={() => props.deleteMovie(props.movie.id)}/>
        </li>
    );
}

function getStars(rating) {
    let stars = []
    for (let i = 0; i < rating; i++) {
        stars.push(<img src="images/star.png" alt="Star" className="btn-sm" />)
    }
    return stars;
}