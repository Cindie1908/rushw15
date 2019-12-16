import React from 'react';
import './App.css';

class FormAddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.postMovie = this.postMovie.bind(this);
      }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }  
    submitForm(e) {
        e.preventDefault();
      } 
      
    postMovie(){
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };
      const url = "https://post-a-form.herokuapp.com/api/movies/";
      fetch(url, config)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Movie ajouté avec l'ID ${res}!`);
          }
          }).catch(e => {
            console.error(e);
            alert("Erreur lors de l'ajout d'un movie");
        });
    }
      
    render (){
      return(
        <div className="FormAddMovie">
          <h1>Saisi d'un movie</h1>

          <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
              <div className="form-data">
                <label htmlFor="title">Titre</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                  />
              </div>

              <div className="form-data">
                <label htmlFor="poster">Affiche</label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
              </div>

              <div className="form-data">
                <label htmlFor="comment">Commentaires</label>
                  <input
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                  />
              </div>
              <hr />
              <div className="form-data">
                <input onClick={this.postMovie} type="submit" value="Envoyer" />

              </div>
            </fieldset>
          </form>
        </div>

      )
    }
}

export default FormAddMovie;