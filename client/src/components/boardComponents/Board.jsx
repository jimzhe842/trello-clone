
import React, {useEffect} from 'react';
import { useDispatch, } from "react-redux";
import Header from './Header';
import Lists from './Lists';
import Sidebar from './Sidebar';
import { getBoard } from "../../actions/BoardActions";

const Board = (props) => {
   const id = props.match.params.id;
   const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getBoard(id))
  }, []
  )

  return (
    <>
			<Header boardId={id} />
      <Lists boardId={id} />
      <Sidebar />

      <div id="modal-container"></div>
      <div id="dropdown-container"></div>
    </>
  );
};

export default Board;
