
import React, {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import Header from './Header';
import Lists from './Lists';
import Sidebar from './Sidebar';
import { getBoard } from "../../actions/BoardActions";

const Board = (props) => {
   const id = props.match.params.id;  
   console.log(id)

   const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getBoard(id)) 
  }, []
  )

  const singleBoard = useSelector(state => state.boards)
console.log("single board", singleBoard)
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
