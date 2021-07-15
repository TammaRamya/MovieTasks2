import movies from './movies.json'
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import Moviecard from './Movie card'
import './m.css'
class MovieList extends Component {
    state = {
        movies: [],
        Moviongenre:[],
        genre:'',
        search:0
    }
    componentDidMount () {
        this.setState({movies: movies})
    }
    onChange=(event)=>{
        this.setState({
            genre:event.target.value

        })
    }
     onSearch = value => {
        let mov=this.state.movies.filter(movie=>movie.genre===this.state.genre)
        this.setState({Moviongenre: mov})
        this.setState({search:1})
        this.setState({genre:''})

    }
    render(){
        let allMovies=this.state.movies.map(movie=>{
            return <>  <Moviecard movieList = {movie} key= {movie.id}/> &nbsp;</>
        })
        let movieList = this.state.Moviongenre.map(movie => {
            return <> <Moviecard movieList = {movie} key= {movie.id}/> &nbsp;</>
        })
    return ( 
        <div>

                <input value={this.state.genre}  onChange={this.onChange} placeholder="Search by genre"/> &nbsp;
                <button type='submit' onClick={this.onSearch}>Search</button>
                {this.state.search?<h1>Movies of genre </h1>:null}
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