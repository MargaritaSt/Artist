import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () => {

  const [state, setState] = useState([]);
  

  useEffect(() => {

    axios({
      method: 'GET',
      url: '/artists' 
    })
    .then(result => {
      setState(result.data[0].artist_data.data)})
    .catch(err => console.log(err));

  }, [])

  return {
    state, 
    setState,
  }

}

export default useApplicationData;