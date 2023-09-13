import "./Movie.css";

function Movie(props){
    return (
        <section key={props.movieDetails.id} className="Movie" >
            <h2>{props.movieDetails.title}</h2>

            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL}/>
                : <p>No Image</p>
            }

            <h3>Rating: {props.movieDetails.rating}</h3>
            {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}
            <br/>
            <button onClick={() => {props.callbackToDelete(props.movieDetails.id)}}>Delete</button>
        </section>
    )
}

export default Movie;
