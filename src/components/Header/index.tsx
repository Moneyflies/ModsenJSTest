import './styles.css';

import React from 'react';
import axios from 'axios';

const Header = () => {
    const categories = [
        { value: "all", label: "All" },
        { value: "art", label: "Art" },
        { value: "biography", label: "Biography" },
        { value: "computers", label: "Computers" },
        { value: "history", label: "History" },
        { value: "medical", label: "Medical" },
        { value: "poetry", label: "Poetry" },
      ];
    const options = categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ));
    // interface SearchState {
    //     term: string;
    // }
      
    // const [searchState, setSearchState] = useState<SearchState>({ term: "" });
      
    // const { term, setTerm } = searchState;
    // const searchBook= (evt) => {
    //     if (evt.key === "Enter")
    //         {
    //             console.log("Hello");
    //         }
    // };
    return (
        <header>
            <h1 class="header_text">
                <a href="" class="link">Search for book</a>
            </h1>
            <div class="search_settings">
                <div class="search_box">
                    <input class="place_for_search" type="text" value="" placeholder="Search" autoFocus /*value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}*//>
                    <a href=""><i class="search_icon"></i></a>
                </div>
                <div class="filter_box">
                    <div class="categories">
                        <span>Categories</span>
                        <select name="" id="">
                            {options}
                        </select>
                    </div>
                    <div class="sorting">
                        <span>Sorting by</span>
                        <select name="" id="">
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;