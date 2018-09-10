import React, { Component } from 'react';
import './App.css';
//import Book from "./Book";
import BookShelfChanger from "./BookShelfChanger";

class ListBooks extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.books.filter(book => book.shelf === this.props.shelf).map((book) => (
                    <li key = {book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
                                <BookShelfChanger book = {book} changeShelf={this.props.changeShelf}/>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
            </ol>
        );
    }
}

export default ListBooks;