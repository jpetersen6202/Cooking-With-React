import React from 'react'
import RecipieIngredientEdit from './RecipieIngredientEdit'

export default function RecipieEdit({recipie}) {
    return (
        <div className='recipie-edit'>
            <div className='recipie-edit__remove-button-container'>
                <button className='btn recipie-edit__remove-button'>&times;</button>
            </div>
            <div className='recipie-edit__details-grid'>
                <label className='recipie-edit__label' htmlFor='name'>Name</label>
                <input className='recipie-edit__input' value={recipie.name} type='text' name='name' id='name' />
                <label className='recipie-edit__label' htmlFor='cookTime'>Cook Time</label>
                <input className='recipie-edit__input' value={recipie.cookTime} type='text' name='cookTime' id='cookTime' />
                <label className='recipie-edit__label' htmlFor='servings'>Servings</label>
                <input className='recipie-edit__input' value={recipie.servings} type='text' name='servings' min='1' id='servings' />
                <label className='recipie-edit__label' htmlFor='instructions'>Instructions</label>
                <textarea className='recipie-edit__input' value={recipie.instructions} name='instructions' id='instructions' />
            </div>

            <br />
            <label className='recipie-edit__label'>Ingredients</label>
            <div className='recipie-edit__ingredient-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div />
                {recipie.ingredients.map(ingredient => (
                    <RecipieIngredientEdit key={ingredient.id} ingredient={ingredient}/>
                ))}
            </div>
            <div className='recipie-edit__add-ingredient-button-container'>
                <button className='btn btn--primary'>Add Ingredient</button>
            </div>
        </div>
    )
}
