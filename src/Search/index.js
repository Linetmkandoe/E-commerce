import './index.css'
import { useState } from "react"

const SearchBar = ()=>{
    const [searchQuery, setSearchQuery] = useState('');
    const handleInputChange = (event) =>{
        setSearchQuery(event.target.value);
    };
    return(
        <form action = "/" method="get">
       <input
            value ={searchQuery}
            onInput={handleInputChange}
            type="text"
            id="header-search"
            placeholder="search your outfits"
            name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
};
export default SearchBar;