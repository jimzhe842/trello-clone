import React from 'react';

const Header = () => {
	return (
		<header>
			<ul>
				<li id="title">Testing Testing</li>
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
