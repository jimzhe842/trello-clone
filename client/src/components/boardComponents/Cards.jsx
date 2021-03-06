import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const Cards = ({ listId }) => {
	const cards = useSelector((state) => state.cards).filter((card) => {
		return card.listId === listId;
	});

	return (
		<div id="cards-container" data-id="list-2-cards">
			{cards.map((card) => {
				return <Card {...card} key={card._id} />;
			})}
		</div>
	);
};

export default Cards;
