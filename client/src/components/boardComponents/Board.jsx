
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
  }, [id, dispatch]
  )

  return (
    <>
			<Header boardId={id} />
      <Lists boardId={id} />
      <Sidebar />
    </>
  );
};

export default Board;
