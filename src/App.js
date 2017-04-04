import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header'
import Recipes from './components/recipe'
import Api from './api/api'

class App extends Component {

    state = {
        recipes: [],
        search: ""
    };

    componentDidMount(){
        Api("apple")
            .then(ingredients => this.setState({recipes: ingredients}))
    }
    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value})
    };
    handleSearch = () => {
        console.log(this.state.search);
        Api(this.state.search)
            .then(ingredients => this.setState({recipes: ingredients}))
    };
  render() {

    return (
      <div>
        <Header
            handleInputChange={this.handleInputChange}
            value={this.state.search}
            handleSearch={this.handleSearch}
        />
        {/*<Recipes recipes={this.state.recipes}/>*/}
      </div>
    );
  }
}

export default App;
