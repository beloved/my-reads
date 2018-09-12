import React, { Component } from 'react';
import './App.css';
import Book from "./Book";

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter(book => book.shelf === this.props.shelf).map((book) => (
                            <li key = {book.id}>
                                <Book shelf = {this.props.shelf} book={book} changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf