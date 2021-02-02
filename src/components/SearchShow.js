import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SHELTER_BASE_URL = 'http://localhost:3000';

const SearchShow = (props) => {

  const [shelter, setShelter] = useState( {} );

  axios.get(`${SHELTER_BASE_URL}/results`, { params: {
    animalType: props.match.params.animalType,
    location: props.match.params.location, radius: props.match.params.radius}
  })
  .then( (res) => {
    console.log(res.data);
  })
  .catch( console.warn );


  return (
    <div>
      Found Something!
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
//       <h2>
//         Search results for: {this.props.match.params.name}
//       </h2>
//         <ul>
//           {
//             this.state.search.map( s => (
//               <li key={s.id}>{s.name}
//               <li>{s.address}</li>
//               <li>{s.description}</li>
//               </li>
//             ))
//           }
//         </ul>
//     </div>
//   )
// }; // render
//
//
}; // const SearchShow

export default SearchShow
