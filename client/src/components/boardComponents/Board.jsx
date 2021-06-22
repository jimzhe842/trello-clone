
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import Lists from './Lists';
import Sidebar from './Sidebar';
import { getBoard } from "../../actions/BoardActions";

const Board = (props) => {
	const path = props.location.pathname;
	const cards = useSelector(state => state.cards)
		console.log("cards in getBoard", cards);

	const getBoardIdFromCard = () => {
		const cardId = props.match.params.id
		const currentlyDisplayedCard = cards.find((card) => card._id === cardId);
		console.log(currentlyDisplayedCard);
		return currentlyDisplayedCard.boardId
	}

	const findBoardId = () => {
		if (path.match(/\/boards\//)) {
			return props.match.params.id
		} else {
			return getBoardIdFromCard()
		}
	}

  const id = findBoardId();
  const dispatch = useDispatch();
	console.log("props location", props);

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
