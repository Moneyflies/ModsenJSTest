import React from 'react';
import './styles.css';


const Card = ({ onClick }) => {
    return (
        <div class="card" onClick={onClick}>
            <img src='../../assets/pexels-amanda-linn-230957-821139.jpg' class="card_image"></img>
            <div class = "bottom">
                <a href="" class="book_category">Computer</a>
                <h3 class="title">Node.js create that to do this and go ahead of this</h3>
                <a href="" class="book_author">David Herron</a>
            </div>
        </div>
    )
}

const handleBookClick = () => {
    // Отправьте запрос на обновление состояния modalActive в App
  };

export default Card;

