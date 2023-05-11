export default function AddMovieForm(props) {

    const createMovie = (e) => {
        e.preventDefault();
        let title = document.getElementById("title-field").value;
        let rating = document.getElementById("rating-field").value;
        
        if (title != "" && rating > 0) {
            props.addMovie(title, rating);
            document.getElementById("title-field").value = ""
            document.getElementById("rating-field").value = 0
        } else {
            alert("Du behöver ange både titel och betyg")
        }
        
    }

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <hr/>
                    <label htmlFor="title-field">Titel:</label>
                    <input type="text" id="title-field" className="form-control"/>
                    
                    <label htmlFor="rating-field">Betyg:</label>
                    <select type="text" id="rating-field" className="form-control">
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </fieldset>
                <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={createMovie}/>
            </form>
        </div>
    )
}