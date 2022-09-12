import React, {Component} from "react";
import Heart from "./heart";
import Table from "./table";

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'like', content: movie => <Heart liked={movie.liked} onLikeUnlike={() => this.props.onLike(movie)}/>},
        {
            key: 'delete',
            content: movie => <button onClick={() => this.props.onDelete(movie)}
                                      className="btn btn-danger">Delete</button>
        }
    ]

    render() {
        const {movies, onDelete, onLike, onSort, sort} = this.props;
        return (
            <Table
                columns={this.columns}
                data={movies}
                onDelete={onDelete}
                onLike={onLike}
                onSort={onSort}
                sort={sort}
            />
        );
    }
}

export default MoviesTable;