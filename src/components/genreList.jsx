import React from "react";

const GenreList = ({genres,currentGenre,textProperty,valueProperty,onGenreChange}) => {
    return(
        <ul className="list-group">
            <li onClick={()=>onGenreChange("All")} className={currentGenre==='All'?"list-group-item active":"list-group-item"}>All Genres</li>
            {genres.map(genre =>
                <li onClick={()=>onGenreChange(genre[textProperty])} key={genre[valueProperty]} className={currentGenre===genre[textProperty]?"list-group-item active":"list-group-item"}>{genre[textProperty]}</li>
            )}
        </ul>
    );
}

GenreList.defaultProps = {
    textProperty : "name",
    valueProperty : "_id"
}

export default GenreList;