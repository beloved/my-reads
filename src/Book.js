import React, { Component } from 'react';
import './App.css';
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    render() {
        let showBookCover;
        if (this.props.book.imageLinks) {
            showBookCover = this.props.book.imageLinks.thumbnail;
        } else {
            showBookCover = '';
        }
        let bookAuthor;
        if (this.props.book.authors) {
            bookAuthor = this.props.book.authors;
        } else {
            bookAuthor = '';
        }
        return (
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${showBookCover}")`}}></div>
                            <BookShelfChanger book = {this.props.book} changeShelf={this.props.changeShelf}/>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">{bookAuthor}</div>
                    </div>

        );
    }
}


export default Book