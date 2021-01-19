import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () => {

  const [state, setState] = useState([]);
  const [radioState, setRadio] = useState(1);

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
    radioState,
    setRadio
  }

}

export default useApplicationData;