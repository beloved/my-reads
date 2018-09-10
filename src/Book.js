import React, { Component } from 'react';
import './App.css';
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
    render() {
        return (
                <li key = {this.props.book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`}}></div>
                            <BookShelfChanger book = {this.props.book} changeShelf={this.props.changeShelf}/>
                        </div>
                        <div className="book-title">{this.props.book.title}</div>
                        <div className="book-authors">{this.props.book.authors}</div>
                    </div>
                </li>
        );
    }
}


export default Book