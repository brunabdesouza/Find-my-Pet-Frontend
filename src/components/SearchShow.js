import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SEARCH_BASE_URL = 'http://localhost:3000';

const SearchShow = (props) => {

  const [shelters, setShelters] = useState( [] );

  const { location, animal_type, radius } = props.match.params

  useEffect( () => {

    axios.get(`${SEARCH_BASE_URL}/shelters/search`, {
      params: { location, animal_type, radius }
    })
    .then( (res) => {
      console.log(res.data);
      setShelters(res.data)
    })
    .catch( console.warn );

}, [location, animal_type, radius]); // useEffect

  return (
    <div>
      
      <ul className="allSearchDisplay">
        {
          shelters.map( s => (
            <li className="searchDisplay" key={s.id}><strong>{s.name}</strong>
            <img src={s.pet_image} alt="pet"/>
            <li><strong>{s.pet_name}</strong></li>
            <li className="myFontSize">{s.pet_description}</li>
            </li>
          ))
        }
      </ul>

    </div>

  ) // return

// class SearchShow extends React.Component {
//
//   state = {
//     search: []
//   }
//
//   componentDidMount(){
//
//     axios.get(`${SHELTER_BASE_URL}/shelters`, {params: {search: this.props.match.params.search}})
//     .then((res) => {
//       console.log('shelters', res.data);
//       this.setState({search: res.data})
//     })
//     .catch(console.warn);
//   }; // componentDidMount
//
// render(){
//   return (
//     <div>
//
//     </div>
//   )
// }; // render
//
//
}; // const SearchShow

export default SearchShow
