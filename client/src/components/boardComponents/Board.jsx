
import React, {useEffect, useState} from 'react';
import { useDispatch, } from "react-redux";
import Header from './Header';
import Lists from './Lists';
import Sidebar from './Sidebar';
import CardModal from './CardModal';
import { getBoard } from "../../actions/BoardActions";

const Board = (props) => {
   const id = props.match.params.id;
   const dispatch = useDispatch();
   const [renderCardModal, setRenderCardModal] = useState(false);


  useEffect(() => {
   dispatch(getBoard(id))
   setRenderCardModal(false)
  }, []
  )

  return (
    <>
			<Header boardId={id} />
      <Lists boardId={id} />
      <Sidebar />

      <div id="modal-container">{renderCardModal ? <CardModal /> : null}</div>
      <div id="dropdown-container"></div>
    </>
  );
};

export default Board;
