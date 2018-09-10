import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import './App.css';
import BookShelfChanger from "./BookShelfChanger";

class BookSearch extends Component {

    state = {
        query: '',
        showMatchedBooks: []
    }
    updateQuery = (query) => {
        this.setState({ query: query })
        this.getMatchedBooks(query);
    }

    getMatchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((showMatchedBooks) => {
                this.setState({showMatchedBooks: showMatchedBooks})
            }).catch((error) => {
                console.error(error);
                alert('Invalid Input, Try again');
                }
            )
        } else {
            this.setState({showMatchedBooks: []})
        }
    }


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={ event => this.updateQuery(event.target.value) }/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.showMatchedBooks.map(showMatchedBook => (
                            <li key = {showMatchedBook.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${showMatchedBook.imageLinks.thumbnail}")`}}></div>
                                        <BookShelfChanger book = {showMatchedBook} changeShelf={this.props.changeShelf} />
                                    </div>
                                    <div className="book-title">{showMatchedBook.title}</div>
                                    <div className="book-authors">{showMatchedBook.authors}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;