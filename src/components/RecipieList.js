import React, {useContext} from 'react'
import Recipie from './Recipie'
import { RecipieContext } from './App'

export default function RecipieList( { recipies } ) {
	const {handleRecipieAdd} = useContext(RecipieContext)
	return (
		<div className='recipie-list'>
			<div>
				{recipies.map(recipie => {
					return <Recipie key={recipie.id} {...recipie} />
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
