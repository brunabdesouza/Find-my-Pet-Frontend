import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SEARCH_BASE_URL = 'http://localhost:3000';

const SheltersIndex = (props) => {

  const [allSheltersIndex, setAllSheltersIndex] = useState( [] );


  useEffect( () => {

    axios.get(`${SEARCH_BASE_URL}/shelters`)
    .then( (res) => {
      setAllSheltersIndex(res.data)
    })
    .catch( console.warn );

  }, []); // useEffect

  return (
    <div>
      <ul className="allSearchDisplay">
        {
          allSheltersIndex.map( s => (
            <li className="searchDisplay" key={s.id}><strong>{s.name}</strong>
            <li>{s.address}</li>
            <li className="myFontSize">{s.description}</li>
            </li>
          ))
        }
      </ul>
    </div>
  )

// class ShelterSearch extends React.Component {
//
//   state = {
//     search: ''
//   }
//
//   handleChange = (ev) => {
//     // console.log('search', ev.target.value);
//     this.setState({search: ev.target.value})
//   }
//
//   handleClick = (ev) => {
//     // console.log('clicked', ev);
//     ev.preventDefault();
//     this.props.history.push(`/shelters/${this.state.search}`)
//   }
//
// render(){
//   return (
//     <div>
//       <form>
//         <label>Search for a Shelter</label>
//         <input
//           type="text"
//           placeholder="search for a shelter"
//           onChange={this.handleChange}
//           ></input>
//         <button onClick={this.handleClick}>Search</button>
//       </form>
//     </div>
//   )
// }; // render

}; // ShelterSearch

export default SheltersIndex;
