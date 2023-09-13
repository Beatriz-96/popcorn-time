import { useState } from "react";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents reload of the app.
        
        const newMovie = {
          title: title,
          rate: rating
          
        }

    props.callbackToAddMovie(newMovie); //Invoke function from the parent component.
    
        setTitle(""); //clear the form
        setRating("") 
    
      }


    return (
        <section>
        <form onSubmit={handleSubmit}>
          <label>
          Title:   
          </label>
          <input 
            type="text" 
            name="title" 
            placeholder="enter the title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <label>
            Rating:
          </label>
          <input 
            type="number"
            min="0"
            max="10" 
            name="rating"  
            value={rating} 
            onChange={(e) => { setRating(e.target.value) }}
           
          />
          
          <button>Create</button>
        </form>
      </section>
    )
}

export default AddMovie;