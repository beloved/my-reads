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

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(BooksAPI.getAll().then((books) => {
            this.setState({books})
        }))
    }

  render() {
    return (
      <div className="App">
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
