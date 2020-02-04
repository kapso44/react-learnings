import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sports: [],
      searchText: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({sports: users}));
  }

  handleChange = (e) => {
    this.setState({searchText : e.target.value})
  }

  render() {
    const {sports, searchText} = this.state;
    const filterSports = sports.filter(sport => 
      sport.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <div className="App">
          <SearchBox 
            placeholder = 'Search Players'
            handleChange = {this.handleChange}
          />
          <CardList sports={filterSports}></CardList>
        </div>
    );
  }
}

export default App;