import React from 'react';
import './App.css';

class App extends React.Component {
    state = { term: '', def: ''}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    this.state.term;
    this.state.def;
    e.preventDefault();
    //need to fix this part
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flash Cards</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <h1>Create New Flash Card</h1>
          <label>
            Term:
          <input type="text" name='term' value={this.state.term} onChange={this.handleChange} />
          </label>
          <label>
            Definition:
          <input type="text" name='def' value={this.state.def} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
