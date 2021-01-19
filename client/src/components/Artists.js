import React, { useState ,useEffect} from 'react';
import './Artists.css';

export default function Login(props) {
 
  const {state, setState, data}  = props;
  const [value, setValue] = useState('');
  let index =1;

  /* catch event from input and filter Artist array by name */
  useEffect (() => {
    const length = value.length;
    if (value!== '') {
      const  newArr = data.filter(element => element.artist.substring(0,length).toUpperCase() === value.toUpperCase())
      setState(newArr)
    } else {
      setState(data)}
  },[value])

  /* goes through Artists array  and puss one Artist object to the table */
  const artistList = state.map(artist => 
    <tr id = {index++}>
      <td id= {"radio"+index++} className = 'payoutColumn'  style={{paddingRight: "20px"}}><input type='checkbox'/></td> 
      <td id= {`artist${index++}`} style={{paddingLeft: "20px"}} >{artist.artist}</td>
      <td id= {`rate${index++}`}  style={{paddingLeft: "20px"}}>{artist.rate} </td>
      <td id= {`streams${index++}`} style={{paddingLeft: "20px"}}>{artist.streams}</td>
      <td id= {`pa${index++}`} style={{paddingLeft: "20px"}}>{(artist.streams * artist.rate).toFixed(2)}</td>
  </tr>
  )
    return (
      <>
      <h1>Artists List</h1>
      <form className ='atristList'>
        <i className="fa fa-user icon"/>
      <input type="text" id="myInput" placeholder="Search for names.." title="Type in a name"  onChange={event => {setValue(event.target.value)}} />
      <div className='table-sticky-container'>
        <table id="t01" className='tableArtist'>
          <tr className='header'>
            <th className = 'payoutColumn'>Payout</th>
            <th className = 'nameColumn'>Name</th>
            <th className = 'rateColumn'>Rate</th>
            <th className = 'streamsColumn'>Streams</th>
            <th className = 'paColumn'>Payout Amount</th>
          </tr>
          {artistList}
    </table>
    </div>
  </form>   
  </>
 );
}
