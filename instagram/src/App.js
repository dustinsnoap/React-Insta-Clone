import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './components/SearchBar/searchbar'
import PostContainer from './components/PostContainer/postContainer'
import dummyData from './dummy-data'
import './reset.css'
import './icons.css'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(post => <PostContainer post={post} key={post.timestamp} />)}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default App;
