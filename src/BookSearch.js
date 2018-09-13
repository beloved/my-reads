import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
//import { Link } from 'react-router-dom';
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
                       return showMatchedBook.shelf = getMatch.shelf;
                    } else {
                       return  showMatchedBook.shelf = 'none';
                    }
                })
                this.setState({showMatchedBooks: showMatchedBooks});
            }).catch((error) => {
                console.error(error);
                }).then(this.setState({showMatchedBooks: []}))
        } else {
            this.setState({showMatchedBooks: []})
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a href='/' className="close-search">Close</a>
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