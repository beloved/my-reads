import React, { Component } from 'react';
import './App.css';
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    render() {
        let book = this.props.book;
        let showBookCover;
        if (book.imageLinks) {
            showBookCover = book.imageLinks.thumbnail;
        } else {
            showBookCover = '';
        }
        let bookAuthor;
        if (book.authors) {
            bookAuthor = book.authors;
        } else {
            bookAuthor = '';
        }

        return (
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${showBookCover}")`}}></div>
                            <BookShelfChanger book = {book} changeShelf={this.props.changeShelf}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{bookAuthor}</div>
                    </div>

        );
    }
}


export default Book