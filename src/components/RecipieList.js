import React from 'react'
import Recipie from './Recipie'

export default function RecipieList( props ) {
	const {
		recipies,
		handleRecipieAdd,
		handleRecipieDelete
	} = props
	
	return (
		<div className='recipie-list'>
			<div>
				{recipies.map(recipie => {
					return <Recipie
						key={recipie.id}
						handleRecipieDelete={handleRecipieDelete}
						{...recipie} 
					/>
				})}
			</div>
			<div className='recipie-list__add-recipie-btn-container'>
				<button className='btn btn--primary' onClick={handleRecipieAdd}>
					Add Recipie
				</button>
			</div>
		</div>
	)
}
