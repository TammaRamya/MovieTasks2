import movies from './movies.json'
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import Moviecard from './Movie card'
import  '../CssFolder/M.css'
class MovieList extends Component {
    state = {
        movies: movies,
        Moviongenre:[],
        genre:'',
        search:0
    }
         
    onChange=(event)=>{
        this.setState({
            genre:event.target.value

        })
    }
     onSearch = () => {
        const mov=this.state.movies.filter(movie=>movie.genre===this.state.genre)
        this.setState({Moviongenre: mov,search:1,genre:''})

    }
    render(){
        const allMovies=this.state.movies.map(movie=>{
            return <>  <Moviecard movieData = {movie} key= {movie.id}/> &nbsp;</>
        })
        const movieList = this.state.Moviongenre.map(movie => {
            return <> <Moviecard movieData = {movie} key= {movie.id}/> &nbsp;</>
        })
        const {genre,search}=this.state;
    return ( 
        <div>

                <input value={genre}  onChange={this.onChange} placeholder="Search by genre"/> &nbsp;
                <button type='submit' onClick={this.onSearch}>Search</button>
                {search?<h1>Movies of genre </h1>:null}
                 <div class="topContainer" >
                 {movieList}
                 </div>
                 <h1>All Movies</h1>
                 <div class="topContainer" >
                 {allMovies}
                 </div>
    </div>);
}
}
 
export default MovieList;