import React from 'react';

class ShelterSearch extends React.Component {

  state = {
    search: ''
  }

  handleChange = (ev) => {
    // console.log('search', ev.target.value);
    this.setState({search: ev.target.value})
  }

  handleClick = (ev) => {
    // console.log('clicked', ev);
    ev.preventDefault();
    this.props.history.push(`/shelters/${this.state.search}`)
  }

render(){
  return (
    <div>
      <form>
        <label>Search for a Shelter</label>
        <input
          type="text"
          placeholder="search for a shelter"
          onChange={this.handleChange}
          ></input>
        <button onClick={this.handleClick}>Search</button>
      </form>
    </div>
  )
}; // render

}; // ShelterSearch

export default ShelterSearch
