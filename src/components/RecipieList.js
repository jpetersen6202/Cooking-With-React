import React from 'react'
import Recipie from './Recipie'

export default function RecipieList( { recipies } ) {
	return (
		<div className='recipie-list'>
			<div>
				{recipies.map(recipie => {
					return <Recipie key={recipie.id} {...recipie} />
				})}
			</div>
			<div className='recipie-list__add-recipie-btn-container'>
				<button className='btn btn--primary'>Add Recipie</button>
			</div>
		</div>
	)
}
