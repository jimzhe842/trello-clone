import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, _id }) => {
	console.log('card title', title);
	return (
		<Link to={`/cards/${_id}`}>
			<div className="card-background">
				<div className="card ">
					<i className="edit-toggle edit-icon sm-icon" />
					<div className="cover-image" />
					<div className="card-info">
						<p>{title}</p>
					</div>
					<div className="card-icons" />
				</div>
			</div>
		</Link>
	);
};
export default Card;
