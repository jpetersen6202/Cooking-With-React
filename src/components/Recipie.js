import React from 'react'
import IngredientList from './IngredientList'

export default function Recipie(props) {
	const {
		name, cookTime, servings, instructions, ingredients
	} = props
	return (
		<div className='recipie'>
			<div className='recipie__header'>
				<h3 className='recipie__title'>{name}</h3>
				<div>
					<button className='btn btn--primary mr-1'>Edit</button>
					<button className='btn btn--danger'>Delete</button>
				</div>
			</div>
			<div className='recipie__row'>
				<span className='recipie__label'>Cook Time:</span>
				<span className='recipie__value'>{cookTime}</span>
			</div>
			<div className='recipie__row'>
				<span className='recipie__label'>Servings:</span>
				<span className='recipie__value'>{servings}</span>
			</div>
			<div className='recipie__row'>
				<span className='recipie__label'>Instructions:</span>
				<div className='recipie__value recipie__instructions recipie__value--indented'>{instructions}</div>
			</div>
			<div className='recipie__row'>
				<span className='recipie__label'>Ingredients:</span>
				<div className='recipie__value recipie__value--indented'>
					<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</div>
	)
}
