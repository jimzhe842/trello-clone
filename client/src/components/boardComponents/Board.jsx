
import React from 'react';
import Header from './Header'
import Lists from './Lists';
import Sidebar from './Sidebar';

const Board = (props) => {
   const id = props.match.params.id;  
   console.log(id)

  return (
    <>
			<Header/>
      <Lists />
      <Sidebar />
      
      <div id="modal-container"></div>
      <div id="dropdown-container"></div>
    </>
  );
};

export default Board;
