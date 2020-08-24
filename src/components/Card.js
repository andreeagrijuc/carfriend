import React from 'react';
//import cars from './cars';

const Card = ({name, nickname, src}) => {
	
	return (

		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='carfriends' src={`${src}`} width="200" height="150" />
			<div>
			<h2>{name}</h2>
			<h4>{nickname}</h4>
			</div>
		</div>
	);
}

export default Card;