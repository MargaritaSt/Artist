import React, { useState } from 'react';
import './Artists.css';

export default function Login(props) {
  const {state, setState}  = props;
  let index =1;
  const inputChange=() => {

 
  }

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
      <input type="text" id="myInput" onkeyup='myFunction' placeholder="Search for names.." title="Type in a name" onChange={inputChange()}/>
      <div className='body'>
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
