import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 class="header_text">
                <a href="" class="link">Search for book</a>
            </h1>
            <div class="search_settings">
                <div class="search_box">
                    <input class="place_for_search" type="text" value="" placeholder="Search" autoFocus />
                    <a href=""><i class="search_icon"></i></a>
                </div>
                <div class="filter_box">
                    <div class="categories">
                        <span>Categories</span>
                        <select name="" id="">
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
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