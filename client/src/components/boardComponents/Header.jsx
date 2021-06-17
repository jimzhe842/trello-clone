import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ boardId }) => {
	const board = useSelector(state => state.boards).find(board => board._id === boardId)
	const title = board ? board.title : 'loading..';
	
	return (
		<header>
			<ul>
				<li id="title">{title}</li>
				<li className="star-icon icon" />
				<li className="private private-icon icon">Private</li>
			</ul>
			<div className="menu">
				<i className="more-icon sm-icon" />Show Menu
			</div>
			<div className="subscribed">
				<i className="sub-icon sm-icon" />Subscribed
			</div>
		</header>
	);
};

export default Header;
