import React from 'react';
import Card from './Card';

const CardList = ({cars}) => {
	
	
	return (
	<div>
  		{
  		cars.map((prototype, i) => {
		return (
			<Card 
			key={i} 
			id={cars[i].id} 
			name={cars[i].name} 
			nickname={cars[i].nickname} 
			src={cars[i].src} 
			/>
		); 
	})	
  		}
  	</div>
	);
}

export default CardList;
