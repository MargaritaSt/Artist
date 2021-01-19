import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () => {

  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  
  /* axios GET request is adding the Artists in the state. */
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/artists' 
    })
    .then(result => {
      setState(result.data[0].artist_data.data)
      setData(result.data[0].artist_data.data)
    })
    .catch(err => console.log(err));
  }, [])

  return {
    state, 
    setState,
    data
  }
}

export default useApplicationData;