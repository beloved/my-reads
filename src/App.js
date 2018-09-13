import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";



class App extends Component {

    state = {
      books: []
    }

    componentDidMount () {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
    }
    ////The code on lines 23-34 was created with assistance by help from a peer in slack, student: Jason Tracy.
    changeShelf = (book, shelf) => {
        const bookIndex = this.state.books.findIndex(
            oldBook => oldBook.id === book.id
        );
        let newState;
        if (bookIndex !== -1) {
            newState = Object.assign({}, this.state.books);
            newState[bookIndex].shelf = shelf;
        }
        BooksAPI.update(book, shelf);
        this.setState({ newState });
    };

  render() {
    return (
      <div className="App">
          {/*Routing with developed based upon Udacity React lesson 5: Managing App Location with React Router*/}
          <Route exact path='/' render={() => (
              <div>
                  <h1>My Reads</h1>
                  <BookShelf shelf = 'currentlyReading' title= 'Currently Reading' books={this.state.books} changeShelf={this.changeShelf}/>
                  <BookShelf shelf = 'wantToRead' title= 'Want to Read' books={this.state.books} changeShelf={this.changeShelf}/>
                  <BookShelf shelf = 'read' title= 'Read' books={this.state.books} changeShelf={this.changeShelf}/>
                  <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
              </div>
              )} />
          <Route exact path='/search' render={() => (
            <BookSearch changeShelf={this.changeShelf} books={this.state.books}/>
          )} />
      </div>
    );
  }
}

export default App
