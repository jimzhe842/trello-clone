import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import Lists from './Lists';
import Sidebar from './Sidebar';
import { getBoard } from "../../actions/BoardActions";

const Board = (props) => {
	const path = props.location.pathname;
	const cards = useSelector(state => state.cards)
	console.log("cards", cards);

	let id
		if (path.match(/\/boards\//)) {
			id = props.match.params.id
		} else {
			const cardId = props.match.params.id
			const currentlyDisplayedCard = cards.find((card) => card._id === cardId);
			if (currentlyDisplayedCard) {
				id = currentlyDisplayedCard.boardId
			}
		}

  const dispatch = useDispatch();

  useEffect(() => {
		if (id) {
			dispatch(getBoard(id))
		}
  }, [id, dispatch]
  )

	if (!id) { return null }

  return (
    <>
			<Header boardId={id} />
      <Lists boardId={id} />
      <Sidebar />
    </>
  );
};

export default Board;
