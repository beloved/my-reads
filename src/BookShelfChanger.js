import React, { Component } from 'react';
import './App.css';

class BookShelfChanger extends Component {
// Code for this shelf menu was inspired and adapted based on research from the React Documentation: https://reactjs.org/docs/forms.html
//     state = {
//         value: this.props.book.shelf
//     };
//
//     changeShelf(e) {
//         this.setState( {value: e.target.value });
//     }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf}
                        onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}
export default BookShelfChanger;