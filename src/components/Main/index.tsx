import './styles.css';

import React, { useState } from 'react';
import axios from 'axios';
import Card from '../Card/index';


const Main = () => {
    const [search, setSearch] =useState("");
    return (
        <div>
            <div class="found">Found 0 results</div>
            <div class="all_books">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    ) 
}

export default Main;