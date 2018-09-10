import React, { Component } from 'react';
import './App.css';
import ListBooks from "./ListBooks";

class BookShelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                       <ListBooks shelf = {this.props.shelf} books={this.props.books} changeShelf={this.props.changeShelf}/>
                </div>
            </div>
        );
    }
}


export default BookShelf