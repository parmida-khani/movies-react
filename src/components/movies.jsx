import React, {Component} from "react";
import {getMovies} from '../services/fakeMovieService';
import Pagination from "./Pagination";
import {paginate} from "../utils/paginate";
import GenreList from "./genreList";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        currentGenre: 'All',
        sort: {path: 'title', order: 'asc'}
    }

    componentDidMount() {
        this.setState({movies: getMovies(), genres: getGenres()})
    }

    handleDelete = movie => {
        const newMovies = this.state.movies.filter(item => item._id !== movie._id)
        this.setState({movies: newMovies});
    }

    handleLikeUnlike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked ? movies[index].liked = false : movies[index].liked = true;
        this.setState({movies});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleGenreChange = genre => {
        this.setState({currentGenre: genre, currentPage: 1});
    }

    handleSort = sort => {
        this.setState({sort})
    }

    render() {
        const {pageSize, currentPage, movies: allMovies, genres, currentGenre, sort} = this.state;
        const filterMovies = currentGenre === 'All' ? allMovies : allMovies.filter(item => item.genre.name === currentGenre);
        const sortedMovies = _.orderBy(filterMovies,[sort.path],[sort.order]);
        const movies = paginate(sortedMovies, currentPage, pageSize);
        if (filterMovies.length === 0)
            return (
                <h4>There are no movies in the database.</h4>
            );
        return (
            <div className="row">
                <div className="col-3 mt-4">
                    <GenreList genres={genres}
                               currentGenre={currentGenre}
                               onGenreChange={this.handleGenreChange}
                    />
                </div>
                <div className="col">
                    <h4 className="mt-4 mb-4">Showing {filterMovies.length} movies in the database</h4>
                    <MoviesTable
                        movies={movies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLikeUnlike}
                        onSort={this.handleSort}
                        sort={sort}
                    />
                    <Pagination
                        pageSize={pageSize}
                        totalCount={filterMovies.length}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>

            </div>

        );
    }


}


export default Movies;