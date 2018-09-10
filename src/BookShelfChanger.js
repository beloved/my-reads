import React, { Component } from 'react';
import './App.css';

class BookShelfChanger extends Component {

    state = {
        value: this.props.book.shelf
    };

    changeShelf(e) {
        this.setState({value:e.target.value});
        console.log(this.props);
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value}
                        onChange={event => this.props.changeShelf(this.props.book, event.target.value)}>
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