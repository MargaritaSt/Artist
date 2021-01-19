// import { Table, Radio, Divider } from 'antd';
import React, { useState } from 'react';
import './Artists.css';


export default function Login(props) {
  const {state, setState, radioState, setRadio}  = props;
  console.log(props.radioState)
  let index =1;
  const radioChange=(value) => {
    setRadio('checked');
  }
// const artistList = state.map(artist => <li>{index++}{artist.artist} {artist.rate} {artist.streams}</li>)
const artistList = state.map(artist => 
  <tr id = {index++}>
 {/* <div id = {index++}>  */}
 {/* <td className = 'payoutColumn'  style={{paddingRight: "20px"}}><input type='radio' onClick={console.log('ffffff')} checked="checked"/>
</td>  */}
 <td id= {"radio"+index++} className = 'payoutColumn'  style={{paddingRight: "20px"}}><input type='checkbox' onClick={radioChange(2)} />
</td> 

<td id= {`artist${index++}`} style={{paddingLeft: "20px"}} >{artist.artist}</td>
<td id= {`rate${index++}`}  style={{paddingLeft: "20px"}}>{artist.rate} </td>
<td id= {`streams${index++}`} style={{paddingLeft: "20px"}}>{artist.streams}</td>
<td id= {`pa${index++}`} style={{paddingLeft: "20px"}}>{(artist.streams * artist.rate).toFixed(2)}</td>

{/* </div>  */}
</tr>
)

  
  let data = [];
  // if (state.length != 0) {
  //   for (let i = 0; i < state.length-1; i++) {
  //     data.push({
  //       key: i,
  //       name: `${state[i].artist}`,
  //       rate: `${state[i].rate} `,
  //       streams: `${state[i].streams}`,
  //     });
  //   }
   
  // }

  return (
    <>
    <h1>Artists List</h1>
    <form className ='atristList'>
    <input type="text" id="myInput" onkeyup='myFunction' placeholder="Search for names.." title="Type in a name"/>
     <div className='body'>
      <table id="t01" className='tableArtist'>
        <tr className='header'>
          <th className = 'payoutColumn'>Payout</th>
          <th className = 'nameColumn'>Name</th>
          <th className = 'rateColumn'>Rate</th>
          <th className = 'streamsColumn'>Streams</th>
          <th className = 'paColumn'>Payout Amount</th>

          
        </tr>
        {/* <tr> */}
        {artistList}
       {/* </tr> */}
  </table>
  </div>
  {/* <script>
function myFunction() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
</script> */}
</form>   
    </>
    );
}



// <div class="radio">
// <label><input type="radio" id='express' name="optradio">JNE</label>
// </div>