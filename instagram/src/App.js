import React, { Component } from 'react'
import SearchBar from './components/SearchBar/searchbar'
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
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar />
        {/* PostContainer */}
      </div>
    );
  }
}

export default App;
