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
      allPosts: [],
      posts: [],
      events: {filterPostsByUsername: this.h_filterPostsByUsername,},
    }
  }
  componentDidMount() {
    this.setState({
      allPosts: dummyData,
      posts: dummyData,
    })
  }
  h_filterPostsByUsername = str => {
    let filtered = this.state.allPosts.filter(post => {
      return post.username.toLowerCase().indexOf(str.toLowerCase()) !== -1
    })
    this.setState({posts: filtered})
  }
  render() {
    return (
      <div className="App">
        <Header events={this.state.events} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export default App;
