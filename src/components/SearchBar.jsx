import React from "react";

const SearchBar = ({ updateSearch }) => {

    return (
        <div className="search-bar">
            <h2>Search</h2>
            <input type="text" placeholder="Query" onChange={(e) => updateSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar;