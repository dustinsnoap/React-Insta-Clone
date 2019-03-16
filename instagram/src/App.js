import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/header'
import Posts from './components/Post/posts'
import dummyData from './dummy-data'
import './reset.css'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export default App;
