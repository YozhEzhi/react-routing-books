import React from 'react';

function Shelf() {
    return (
        <div className="mdl-grid">
            {books.javascript.map(book => 
                <div key={book.slug} className="book-card mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__content">
                        <img src={book.cover} className="book-card__image" />

                        <div className="book-card__details">
                            <h2 className="book-card__title">{book.title}</h2>

                            <div className="book-card__info">
                                <p>{book.author}</p>
                                <p>{book.publisher}, {book.year}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mdl-card__actions mdl-card--border">
                        <a href={`/books/javascript/learning-javascript`} className="mdl-button mdl-button--colored">
                            Подробнее
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shelf;
