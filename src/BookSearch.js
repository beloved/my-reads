import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import './App.css';
import Book from "./Book";

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
                showMatchedBooks.map((showMatchedBook) => {
                    //The code on lines 23-29 was created with assistance by help from peers in slack, student: solittletime.
                    let getMatch = this.props.books.find((book) => book.id === showMatchedBook.id);
                    if (getMatch) {
                        showMatchedBook.shelf = getMatch.shelf;
                    } else {
                        showMatchedBook.shelf = 'none';
                    }
                })
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
                                <Book book={showMatchedBook} changeShelf={this.props.changeShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;