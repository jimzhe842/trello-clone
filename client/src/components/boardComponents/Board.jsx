import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import Lists from './Lists';
import Sidebar from './Sidebar';
import { getBoard } from "../../actions/BoardActions";

const Board = (props) => {
	const path = props.location.pathname;
	const cards = useSelector(state => state.cards)

	let boardId
		if (path.match(/\/boards\//)) {
			boardId = props.match.params.id
		} else {
			const cardId = props.match.params.id
			const currentlyDisplayedCard = cards.find((card) => card._id === cardId);
			if (currentlyDisplayedCard) {
				boardId = currentlyDisplayedCard.boardId
			}
		}

  const dispatch = useDispatch();

  useEffect(() => {
		if (boardId) {
			dispatch(getBoard(boardId))
		}
  }, [boardId, dispatch]
  )

	if (!boardId) { return null }

  return (
    <>
			<Header boardId={boardId} />
      <Lists boardId={boardId} />
      <Sidebar />
    </>
  );
};

export default Board;
